import { IRule } from '../interfaces/IRule';
import { IScanRequest } from '../interfaces/IScanRequest';
import { IRuleResult } from '../interfaces/IRuleResult';
import { URL } from 'url';

export class KeywordRule implements IRule {
  private readonly suspiciousKeywords = [
    'login',
    'signin',
    'sign-in',
    'verify',
    'account',
    'secure',
    'update',
    'confirm',
    'banking',
    'wallet',
    'paypal',
    'support',
    'admin',
    'service',
    'recover',
  ];

  public async scan(input: IScanRequest): Promise<IRuleResult | null> {
    try {
      const parsedUrl = new URL(input.url);
      const urlString = (
        parsedUrl.hostname +
        parsedUrl.pathname +
        parsedUrl.search
      ).toLowerCase();

      const foundKeywords: string[] = [];

      this.suspiciousKeywords.forEach((keyword) => {
        if (urlString.includes(keyword)) {
          foundKeywords.push(keyword);
        }
      });

      if (foundKeywords.length > 0) {
        // Score: 15 points per keyword, capped at 60
        const totalScore = Math.min(foundKeywords.length * 15, 60);
        return {
          ruleName: 'Suspicious Keyword Check',
          score: totalScore,
          details: `The URL contains suspicious keywords: ${foundKeywords.join(', ')}.`,
        };
      }

      return null;
    } catch (error) {
      return null;
    }
  }
}
