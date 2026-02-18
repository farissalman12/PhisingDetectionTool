import { PhishingScanner } from './core/services/PhishingScanner';

async function main() {
  const url = process.argv[2];
  if (!url) {
    console.error('Please provide a URL to scan.');
    console.error('Usage: ts-node src/cli.ts <url>');
    process.exit(1);
  }

  console.log(`Scanning URL: ${url}...`);
  const scanner = new PhishingScanner();
  const result = await scanner.scan(url);

  console.log(JSON.stringify(result, null, 2));
}

main().catch(console.error);
