import { SuspiciousTLDRule } from '../../src/core/rules/SuspiciousTLDRule';

describe('SuspiciousTLDRule', () => {
  let rule: SuspiciousTLDRule;

  beforeEach(() => {
    rule = new SuspiciousTLDRule();
  });

  it('should detect .xyz domain', async () => {
    const result = await rule.scan({ url: 'http://example.xyz' });
    expect(result).not.toBeNull();
    expect(result?.score).toBe(20);
    expect(result?.details).toContain('.xyz');
  });

  it('should detect .ru domain', async () => {
    const result = await rule.scan({ url: 'http://malware.ru/login' });
    expect(result).not.toBeNull();
    expect(result?.details).toContain('.ru');
  });

  it('should ignore safe TLDs like .com', async () => {
    const result = await rule.scan({ url: 'https://google.com' });
    expect(result).toBeNull();
  });

  it('should ignore safe TLDs like .org', async () => {
    const result = await rule.scan({ url: 'https://wikipedia.org' });
    expect(result).toBeNull();
  });

  it('should handle subdomains correctly', async () => {
    const result = await rule.scan({ url: 'http://sub.domain.top' });
    expect(result).not.toBeNull();
    expect(result?.details).toContain('.top');
  });
});
