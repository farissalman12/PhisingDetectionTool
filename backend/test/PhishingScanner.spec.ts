import { PhishingScanner } from '../src/core/services/PhishingScanner';

describe('PhishingScanner', () => {
  let scanner: PhishingScanner;

  beforeEach(() => {
    scanner = new PhishingScanner();
  });

  it('should return safe verdict for google.com', async () => {
    const result = await scanner.scan('https://google.com');
    expect(result.verdict).toBe('safe');
    expect(result.totalScore).toBe(0);
    expect(result.rules).toHaveLength(0);
  });

  it('should return phishing verdict for high-risk URL', async () => {
    // IP address triggers +75 score
    const result = await scanner.scan('http://192.168.1.1/login');
    expect(result.totalScore).toBeGreaterThanOrEqual(75); // 75 (IP) + 15 (login) = 90
    expect(result.verdict).toBe('phishing');
    expect(result.rules.length).toBeGreaterThan(0);
  });

  it('should return suspicious verdict for medium-risk URL', async () => {
    // .xyz triggers +20 score
    const result = await scanner.scan('http://example.xyz');
    expect(result.verdict).toBe('suspicious');
    expect(result.totalScore).toBeGreaterThanOrEqual(20);
  });

  it('should cap score at 100', async () => {
    // Multiple violations
    const result = await scanner.scan('http://192.168.1.1/login-verify-account-secure-update-confirm.xyz');
    // 75 (IP) + 20 (TLD) + 60 (Keywords) = 155 -> 100
    expect(result.totalScore).toBe(100);
  });
});
