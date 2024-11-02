import { describe, expect, test } from 'vitest';
import boolean from './boolean';

describe('Rule "boolean"', () => {
  const validate = boolean();

  test('should pass with valid input', () => {
    expect(validate(true)).toBe(true);
    expect(validate(false)).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate(1)).toBe(false);
    expect(validate(0)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate({})).toBe(false);
  });
});
