import { describe, expect, test } from 'vitest';
import stringMaxLength from './stringMaxLength';

describe('Rule "stringMaxLength"', () => {
  const validate = stringMaxLength({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate('_'.repeat(10))).toBe(true);
    expect(validate(['_'.repeat(10)])).toBe(true);
    expect(validate(['_'.repeat(10), '_'.repeat(9)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_'.repeat(11))).toBe(false);
    expect(validate(['_'.repeat(11)])).toBe(false);
    expect(validate(['_'.repeat(11), '_'.repeat(10)])).toBe(false);
  });
});
