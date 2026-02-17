import { IRule } from '../interfaces/IRule';
import { IScanRequest } from '../interfaces/IScanRequest';
import { IScanResult, ScanVerdict } from '../interfaces/IScanResult';
import { IPAddressRule } from '../rules/IPAddressRule';
import { SuspiciousTLDRule } from '../rules/SuspiciousTLDRule';
import { KeywordRule } from '../rules/KeywordRule';
import { PunycodeRule } from '../rules/PunycodeRule';

export class PhishingScanner {
  private rules: IRule[];

  constructor() {
    // Register default rules
    this.rules = [
      new IPAddressRule(),
      new SuspiciousTLDRule(),
      new KeywordRule(),
      new PunycodeRule()
    ];
  }

  public async scan(url: string, content?: string): Promise<IScanResult> {
    const request: IScanRequest = { url, content };
    let totalScore = 0;
    const ruleResults = [];

    // Run all rules in parallel
    const promises = this.rules.map(rule => rule.scan(request));
    const results = await Promise.all(promises);

    for (const result of results) {
      if (result) {
        totalScore += result.score;
        ruleResults.push(result);
      }
    }

    // Cap score at 100
    totalScore = Math.min(totalScore, 100);

    return {
      totalScore,
      rules: ruleResults,
      verdict: this.getVerdict(totalScore)
    };
  }

  private getVerdict(score: number): ScanVerdict {
    if (score >= 50) return 'phishing';
    if (score >= 11) return 'suspicious';
    return 'safe';
  }
}
