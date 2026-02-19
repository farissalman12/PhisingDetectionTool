
import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import * as crypto from 'crypto';

export interface VirusTotalResult {
  malicious: number;
  suspicious: number;
  harmless: number;
  undetected: number;
  total: number;
  permalink?: string;
}

@Injectable()
export class VirusTotalService {
  private readonly logger = new Logger(VirusTotalService.name);
  private readonly apiKey = process.env.VIRUSTOTAL_API_KEY;
  private readonly baseUrl = 'https://www.virustotal.com/api/v3/urls';

  async checkUrl(url: string): Promise<VirusTotalResult | null> {
    if (!this.apiKey) {
      this.logger.warn('VIRUSTOTAL_API_KEY is not set. Skipping VT check.');
      return null;
    }

    try {
      // 1. Compute SHA-256 of the URL
      // VT requires the ID to be the SHA-256 of the URL
      const urlId = crypto.createHash('sha256').update(url).digest('hex');

      // 2. GET request to /urls/{id}
      const response = await axios.get(`${this.baseUrl}/${urlId}`, {
        headers: {
          'x-apikey': this.apiKey,
        },
      });

      const data = response.data?.data?.attributes?.last_analysis_stats;
      
      if (!data) return null;

      return {
        malicious: data.malicious || 0,
        suspicious: data.suspicious || 0,
        harmless: data.harmless || 0,
        undetected: data.undetected || 0,
        total: (data.malicious + data.suspicious + data.harmless + data.undetected),
        permalink: `https://www.virustotal.com/gui/url/${urlId}`,
      };

    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        // URL not found in VT database -> Unknown/Clean-ish
        return { malicious: 0, suspicious: 0, harmless: 0, undetected: 0, total: 0 };
      }
      this.logger.error(`VirusTotal API failed: ${error.message}`);
      return null;
    }
  }
}
