import { describe, expect, test } from 'vitest';
import string from './string';

describe('Rule "string"', () => {
  const validate = string();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(1)).toBe(false);
    expect(validate(0)).toBe(false);
    expect(validate(true)).toBe(false);
    expect(validate(false)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate({})).toBe(false);
  });
});
