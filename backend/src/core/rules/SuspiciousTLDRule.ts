import { IRule } from '../interfaces/IRule';
import { IScanRequest } from '../interfaces/IScanRequest';
import { IRuleResult } from '../interfaces/IRuleResult';
import { URL } from 'url';

export class SuspiciousTLDRule implements IRule {
  private readonly riskyTLDs = new Set([
    'xyz', 'top', 'ru', 'cn', 'gq', 'ml', 'cf', 'tk', 'ga', 
    'work', 'date', 'kim', 'zip', 'review', 'country', 'stream', 'download'
  ]);

  public async scan(input: IScanRequest): Promise<IRuleResult | null> {
    try {
      const parsedUrl = new URL(input.url);
      const hostname = parsedUrl.hostname;
      const parts = hostname.split('.');
      
      if (parts.length < 2) return null; // e.g. "localhost"

      const tld = parts[parts.length - 1].toLowerCase();

      if (this.riskyTLDs.has(tld)) {
        return {
          ruleName: 'Suspicious TLD Check',
          score: 20,
          details: `The URL uses a high-risk Top-Level Domain (.${tld}) often associated with phishing campaigns.`
        };
      }

      return null;
    } catch (error) {
      return null;
    }
  }
}
