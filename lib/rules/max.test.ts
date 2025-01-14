import { describe, expect, test } from 'vitest';
import max from './max';

describe('Rule "max"', () => {
  const validate = max({ max: 10 });

  test('should pass with valid input', () => {
    expect(validate(10)).toBe(true);
    expect(validate('_'.repeat(10))).toBe(true);
    expect(validate(Array.from('_'.repeat(10)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(11)).toBe(false);
    expect(validate('_'.repeat(11))).toBe(false);
    expect(validate(Array.from('_'.repeat(11)))).toBe(false);
  });
});
