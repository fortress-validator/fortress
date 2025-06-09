import { describe, expect, test } from 'vitest';
import stringLengthBetween from './stringLengthBetween';

describe('Rule "stringLengthBetween"', () => {
  const validate = stringLengthBetween({ min: 10, max: 20 });

  test('should pass with valid input', () => {
    expect(validate('_'.repeat(15))).toBe(true);
    expect(validate(['_'.repeat(15)])).toBe(true);
    expect(validate(['_'.repeat(15), '_'.repeat(15)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_'.repeat(9))).toBe(false);
    expect(validate('_'.repeat(21))).toBe(false);
    expect(validate(['_'.repeat(9)])).toBe(false);
    expect(validate(['_'.repeat(9), '_'.repeat(15)])).toBe(false);
    expect(validate(['_'.repeat(21)])).toBe(false);
    expect(validate(['_'.repeat(21)]), '_'.repeat(15)).toBe(false);
  });
});
