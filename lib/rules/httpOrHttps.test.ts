import { describe, expect, test } from 'vitest';
import httpOrHttps from './httpOrHttps';

describe('Rule "httpOrHttps"', () => {
  const validate = httpOrHttps();

  test('should pass with valid input', () => {
    expect(validate('http://example.com')).toBe(true);
    expect(validate('https://example.com')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('ftp://')).toBe(false);
    expect(validate('ftp://example.com')).toBe(false);
  });
});
