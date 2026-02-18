import { IRule } from '../interfaces/IRule';
import { IScanRequest } from '../interfaces/IScanRequest';
import { IRuleResult } from '../interfaces/IRuleResult';
import { URL, domainToUnicode } from 'url';

export class PunycodeRule implements IRule {
  public async scan(input: IScanRequest): Promise<IRuleResult | null> {
    try {
      const parsedUrl = new URL(input.url);
      const hostname = parsedUrl.hostname;

      const decoded = domainToUnicode(hostname);
      
      if (hostname !== decoded) {
        return {
          ruleName: 'Punycode/Homograph Detection',
          score: 80,
          details: `The domain uses Punycode (${hostname} -> ${decoded}), which is often used to spoof legitimate brands.`
        };
      }

      return null;
    } catch (error) {
      return null;
    }
  }
}
