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

@Injectable()
export class PhishingScanner {
  private rules: IRule[];

  constructor(
    private reputationService: ReputationService,
    private aiAnalysisService: AiAnalysisService,
  ) {
    // Register default rules
    this.rules = [
      new IPAddressRule(),
      new SuspiciousTLDRule(),
      new KeywordRule(),
      new PunycodeRule(),
    ];
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

    // 2. Reputation (50% weight)
    const reputationResult =
      await this.reputationService.checkSafeBrowsing(url);
    const reputationScore = reputationResult.score; // 0 or 100

    // 3. AI (20% weight)
    const aiResult = await this.aiAnalysisService.analyzeContent(url, content);
    const aiScore = aiResult.score;

    // 4. Weighted Formula
    // Score = (0.5 * Rep) + (0.3 * Heu) + (0.2 * AI)
    let totalScore =
      0.5 * reputationScore + 0.3 * heuristicScore + 0.2 * aiScore;

    // Dynamic Adjustment: If Reputation is unknown (0) but Heuristics are strong (> 40),
    // we don't want the 0 reputation to drag the score down too much.
    // In this case, we allow Heuristics to drive the score more.
    if (reputationScore === 0 && heuristicScore > 40) {
      totalScore = Math.max(totalScore, heuristicScore);
    }

    // AI Boost: If AI detects high urgency/credentials (> 70), boost score.
    // This is critical for "Email Mode" where the URL might be a placeholder or benign.
    if (aiScore > 70) {
      totalScore = Math.max(totalScore, aiScore);
    }

    // Critical Override: If Reputation is malicious (score 100), total is 100.
    if (reputationScore === 100) {
      totalScore = 100;
    }

    return {
      totalScore: Math.round(totalScore),
      heuristicScore,
      reputationScore,
      aiScore,
      aiExplanation: aiResult.explanation,
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
