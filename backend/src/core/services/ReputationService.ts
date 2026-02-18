import { Injectable } from '@nestjs/common';

export interface ReputationResult {
  source: 'google_safe_browsing' | 'virus_total';
  safe: boolean;
  score: number; // 0-100, where 100 is high risk
  details?: any;
}

@Injectable()
export class ReputationService {
  async checkSafeBrowsing(url: string): Promise<ReputationResult> {
    // MOCK: In production, call Google Safe Browsing API
    // For now, simulate a check.
    const isMockPhishing =
      url.includes('malware.com') || url.includes('phishing');
    return {
      source: 'google_safe_browsing',
      safe: !isMockPhishing,
      score: isMockPhishing ? 100 : 0,
    };
  }

  async checkVirusTotal(url: string): Promise<ReputationResult> {
    // MOCK: In production, call VirusTotal API
    return {
      source: 'virus_total',
      safe: true,
      score: 0,
    };
  }
}
