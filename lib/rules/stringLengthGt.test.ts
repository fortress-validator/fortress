import { describe, expect, test } from 'vitest';
import stringLengthGt from './stringLengthGt';

describe('Rule "stringLengthGt"', () => {
  const validate = stringLengthGt({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate('_'.repeat(11))).toBe(true);
    expect(validate(['_'.repeat(11)])).toBe(true);
    expect(validate(['_'.repeat(11), '_'.repeat(12)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_'.repeat(10))).toBe(false);
    expect(validate(['_'.repeat(10)])).toBe(false);
    expect(validate(['_'.repeat(10), '_'.repeat(11)])).toBe(false);
  });
});
