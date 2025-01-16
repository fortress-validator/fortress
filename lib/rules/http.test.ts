import { describe, expect, test } from 'vitest';
import http from './http';

describe('Rule "http"', () => {
  const validate = http();

  test('should pass with valid input', () => {
    expect(validate('http://')).toBe(true);
    expect(validate('https://')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('ftp://')).toBe(false);
  });
});
