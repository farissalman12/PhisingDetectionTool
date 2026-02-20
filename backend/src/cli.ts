import { PhishingScanner } from './core/services/PhishingScanner';
import { ReputationService } from './core/services/ReputationService';
import { AiAnalysisService } from './core/services/AiAnalysisService';
import { VirusTotalService } from './core/services/VirusTotalService';

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Please provide a URL to scan.');
    console.error('Usage: ts-node src/cli.ts <url>');
    process.exit(1);
  }

  console.log(`Scanning URL: ${url}...`);
  const reputationService = new ReputationService();
  const aiAnalysisService = new AiAnalysisService();
  const virusTotalService = new VirusTotalService();
  const scanner = new PhishingScanner(reputationService, aiAnalysisService, virusTotalService);
  const result = await scanner.scan(url);

  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
