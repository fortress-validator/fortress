import { describe, expect, test } from 'vitest';
import url from './url';

describe('Rule "url"', () => {
  const validate = url();

  test('should pass with valid input', () => {
    expect(validate('http://localhost')).toBe(true);
    expect(validate('http://127.0.0.1')).toBe(true);
    expect(validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
    expect(validate('http://example.com')).toBe(true);
    expect(validate('https://example.com')).toBe(true);
    expect(validate('ftp://example.com')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('example.com')).toBe(false);
    expect(validate('http://')).toBe(false);
    expect(validate('http://example.00')).toBe(false);
  });
});
