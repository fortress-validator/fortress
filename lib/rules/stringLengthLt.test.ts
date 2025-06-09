import { describe, expect, test } from 'vitest';
import stringLengthLt from './stringLengthLt';

describe('Rule "stringLengthLt"', () => {
  const validate = stringLengthLt({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate('_'.repeat(9))).toBe(true);
    expect(validate(['_'.repeat(9)])).toBe(true);
    expect(validate(['_'.repeat(9), '_'.repeat(8)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_'.repeat(10))).toBe(false);
    expect(validate(['_'.repeat(10)])).toBe(false);
    expect(validate(['_'.repeat(10), '_'.repeat(9)])).toBe(false);
  });
});
