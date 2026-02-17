import { IRule } from '../interfaces/IRule';
import { IScanRequest } from '../interfaces/IScanRequest';
import { IRuleResult } from '../interfaces/IRuleResult';
import { URL } from 'url';

export class IPAddressRule implements IRule {
  private readonly ipv4Regex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$/;

  public async scan(input: IScanRequest): Promise<IRuleResult | null> {
    try {
      const parsedUrl = new URL(input.url);
      const hostname = parsedUrl.hostname;

      // Check if hostname is an IPv4 address
      if (this.ipv4Regex.test(hostname)) {
        return {
          ruleName: 'IP Address Check',
          score: 75,
          details: `The URL uses an IP address (${hostname}) instead of a domain name. This is a common phishing indicator.`
        };
      }

      return null;
    } catch (error) {
      // Invalid URL format, let other rules handle or ignore
      return null;
    }
  }
}
