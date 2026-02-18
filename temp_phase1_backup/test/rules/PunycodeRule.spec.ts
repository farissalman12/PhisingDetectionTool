import { PunycodeRule } from '../../src/core/rules/PunycodeRule';

describe('PunycodeRule', () => {
  let rule: PunycodeRule;

  beforeEach(() => {
    rule = new PunycodeRule();
  });

  it('should detect punycode domain', async () => {
    // xn--pypal-4ya.com -> pypaI.com (approx)
    const result = await rule.scan({ url: 'http://xn--pypal-4ya.com' });
    expect(result).not.toBeNull();
    expect(result?.score).toBe(80);
    expect(result?.details).toContain('xn--pypal-4ya.com');
  });

  it('should ignore ascii domains', async () => {
    const result = await rule.scan({ url: 'https://google.com' });
    expect(result).toBeNull();
  });

  it('should handle subdomains with punycode', async () => {
    const result = await rule.scan({ url: 'http://xn--sub-7na.example.com' });
    expect(result).not.toBeNull();
    expect(result?.details).toContain('xn--sub-7na');
  });
});
