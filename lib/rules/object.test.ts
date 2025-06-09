import { describe, expect, test } from 'vitest';
import object from './object';

describe('Rule "object"', () => {
  const validate = object();

  test('should pass with valid input', () => {
    expect(validate({})).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('')).toBe(false);
    expect(validate(1)).toBe(false);
    expect(validate(0)).toBe(false);
    expect(validate(true)).toBe(false);
    expect(validate(false)).toBe(false);
    expect(validate([])).toBe(false);
  });
});
