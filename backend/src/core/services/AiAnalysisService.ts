import { Injectable } from '@nestjs/common';

export interface AiAnalysisResult {
  score: number; // 0-100
  explanation: string;
}

@Injectable()
export class AiAnalysisService {
  async analyzeContent(
    url: string,
    content?: string,
  ): Promise<AiAnalysisResult> {
    // SIMULATION: In a real scenario, this would call OpenAI/Anthropic API.
    // For this portfolio project, we simulate the analysis based on simple keyword heuristics
    // to mimic "AI" reasoning without incurred costs.

    let score = 0;
    const reasons: string[] = [];

    // Simulate processing delay (AI takes time!)
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Basic "AI" Logic Simulation
    if (url.includes('ngrok') || url.includes('serveo')) {
      score += 80;
      reasons.push('URL uses a tunneling service often used by attackers.');
    }

    if (content) {
      const lowerContent = content.toLowerCase();
      if (
        lowerContent.includes('urgent') ||
        lowerContent.includes('immediately')
      ) {
        score += 40;
        reasons.push('Content conveys artificial urgency.');
      }
      if (
        lowerContent.includes('password') &&
        lowerContent.includes('verify')
      ) {
        score += 50;
        reasons.push('Content requests credential verification.');
      }
    }

    // fallback
    if (score === 0) {
      score = 5;
      reasons.push(
        'No significant phishing indicators found in textual analysis.',
      );
    }

    return {
      score: Math.min(score, 100),
      explanation: reasons.join(' '),
    };
  }
}
