import { describe, expect, test } from 'vitest';
import stringMinLength from './stringMinLength';

describe('Rule "stringMinLength"', () => {
  const validate = stringMinLength({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate('_'.repeat(10))).toBe(true);
    expect(validate(['_'.repeat(10)])).toBe(true);
    expect(validate(['_'.repeat(10), '_'.repeat(11)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_'.repeat(9))).toBe(false);
    expect(validate(['_'.repeat(9)])).toBe(false);
    expect(validate(['_'.repeat(9), '_'.repeat(10)])).toBe(false);
  });
});
