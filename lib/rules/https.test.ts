import { describe, expect, test } from 'vitest';
import https from './https';

describe('Rule "https"', () => {
  const validate = https();

  test('should pass with valid input', () => {
    expect(validate('https://')).toBe(true);
    expect(validate('https://example.com')).toBe(true);
    expect(validate('https://127.0.0.1')).toBe(true);
    expect(validate('https://localhost')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('http://example.com')).toBe(false);
    expect(validate('ftp://example.com')).toBe(false);
  });
});
