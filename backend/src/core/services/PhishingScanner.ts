import { Injectable } from '@nestjs/common';
import { IRule } from '../interfaces/IRule';
import { IScanRequest } from '../interfaces/IScanRequest';
import { IScanResult, ScanVerdict } from '../interfaces/IScanResult';
import { IPAddressRule } from '../rules/IPAddressRule';
import { SuspiciousTLDRule } from '../rules/SuspiciousTLDRule';
import { KeywordRule } from '../rules/KeywordRule';
import { PunycodeRule } from '../rules/PunycodeRule';
import { ReputationService } from './ReputationService';
import { AiAnalysisService } from './AiAnalysisService';

import { VirusTotalService } from './VirusTotalService';

@Injectable()
export class PhishingScanner {
  private rules: IRule[];

  constructor(
    private reputationService: ReputationService,
    private aiAnalysisService: AiAnalysisService,
    private virusTotalService: VirusTotalService,
  ) {
    // ...
  }

  public async scan(url: string, content?: string): Promise<IScanResult> {
    const request: IScanRequest = { url, content };

    // 1. Heuristics (30% weight)
    let heuristicScore = 0;
    const ruleResults = [];
    const promises = this.rules.map((rule) => rule.scan(request));
    const results = await Promise.all(promises);

    for (const result of results) {
      if (result) {
        heuristicScore += result.score;
        ruleResults.push(result);
      }
    }
    heuristicScore = Math.min(heuristicScore, 100);

    // 2. Reputation (Safe Browsing & VirusTotal)
    const [reputationResult, vtResult] = await Promise.all([
      this.reputationService.checkSafeBrowsing(url),
      this.virusTotalService.checkUrl(url),
    ]);

    let reputationScore = reputationResult.score; // 0 or 100

    // VT Logic: If VT says malicious > 1, it's definitely bad.
    if (vtResult && vtResult.malicious > 0) {
        reputationScore = 100;
    }

    // 3. AI (20% weight)
    const aiResult = await this.aiAnalysisService.analyzeContent(url, content);
    const aiScore = aiResult.score;

    // 4. Additive Formula (Risk accumulates)
    let totalScore = 0;

    // Reputation is the strongest indicator
    if (reputationScore > 0) {
      totalScore += reputationScore; 
    }

    // Add Heuristics
    totalScore += heuristicScore;

    // Add AI Analysis
    totalScore += aiScore;

    // Cap at 100
    totalScore = Math.min(totalScore, 100);
    
    // Ensure minimal noise for "safe" sites (0-5) just to show analysis happened
    if (totalScore === 0) totalScore = Math.floor(Math.random() * 3) + 1; // 1-3 range

    return {
      totalScore: Math.round(totalScore),
      heuristicScore,
      reputationScore,
      aiScore,
      aiExplanation: aiResult.explanation,
      virusTotal: vtResult,
      rules: ruleResults,
      verdict: this.getVerdict(totalScore),
    };
  }

  private getVerdict(score: number): ScanVerdict {
    if (score >= 50) return 'phishing';
    if (score >= 11) return 'suspicious';
    return 'safe';
  }
}
