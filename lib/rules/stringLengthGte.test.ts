import { describe, expect, test } from 'vitest';
import stringLengthGte from './stringLengthGte';

describe('Rule "stringLengthGte"', () => {
  const validate = stringLengthGte({ length: 10 });

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
