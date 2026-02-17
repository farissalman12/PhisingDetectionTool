import { IPAddressRule } from '../../src/core/rules/IPAddressRule';

describe('IPAddressRule', () => {
  let rule: IPAddressRule;

  beforeEach(() => {
    rule = new IPAddressRule();
  });

  it('should detect IPv4 address in URL', async () => {
    const result = await rule.scan({ url: 'http://192.168.1.1/login' });
    expect(result).not.toBeNull();
    expect(result?.score).toBe(75);
    expect(result?.details).toContain('192.168.1.1');
  });

  it('should ignore regular domain names', async () => {
    const result = await rule.scan({ url: 'https://google.com' });
    expect(result).toBeNull();
  });

  it('should handle invalid URLs gracefully', async () => {
    const result = await rule.scan({ url: 'not-a-url' });
    expect(result).toBeNull();
  });

  it('should ignore numbers in path', async () => {
    const result = await rule.scan({ url: 'https://google.com/123.456' });
    expect(result).toBeNull();
  });
});
