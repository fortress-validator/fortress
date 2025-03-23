import { describe, expect, test } from 'vitest';
import http from './http';

describe('Rule "http"', () => {
  const validate = http();

  test('should pass with valid input', () => {
    expect(validate('http://')).toBe(true);
    expect(validate('http://example.com')).toBe(true);
    expect(validate('http://127.0.0.1')).toBe(true);
    expect(validate('http://localhost')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('https://example.com')).toBe(false);
    expect(validate('ftp://example.com')).toBe(false);
  });
});
