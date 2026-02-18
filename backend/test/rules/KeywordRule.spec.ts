import { KeywordRule } from '../../src/core/rules/KeywordRule';

describe('KeywordRule', () => {
  let rule: KeywordRule;

  beforeEach(() => {
    rule = new KeywordRule();
  });

  it('should detect single keyword "login"', async () => {
    const result = await rule.scan({ url: 'http://example.com/login' });
    expect(result).not.toBeNull();
    expect(result?.score).toBe(15);
    expect(result?.details).toContain('login');
  });

  it('should accumulate score for multiple keywords', async () => {
    const result = await rule.scan({
      url: 'http://example.com/verify-account-login',
    });
    expect(result).not.toBeNull();
    expect(result?.score).toBe(45); // verify, account, login = 15 * 3
    expect(result?.details).toContain('verify');
    expect(result?.details).toContain('account');
    expect(result?.details).toContain('login');
  });

  it('should cap score at 60', async () => {
    const result = await rule.scan({
      url: 'http://example.com/login-verify-account-secure-update-confirm',
    });
    expect(result).not.toBeNull();
    expect(result?.score).toBe(60);
  });

  it('should ignore safe URLs', async () => {
    const result = await rule.scan({ url: 'https://google.com/search' });
    expect(result).toBeNull();
  });

  it('should detect keywords in query parameters', async () => {
    const result = await rule.scan({
      url: 'http://example.com?action=verify&type=banking',
    });
    expect(result).not.toBeNull();
    expect(result?.details).toContain('verify');
    expect(result?.details).toContain('banking');
  });
});
