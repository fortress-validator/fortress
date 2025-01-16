import { describe, expect, test } from 'vitest';
import https from './https';

describe('Rule "https"', () => {
  const validate = https();

  test('should pass with valid input', () => {
    expect(validate('https://')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('http://')).toBe(false);
  });
});
