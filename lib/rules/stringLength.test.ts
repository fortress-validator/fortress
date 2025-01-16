import { describe, expect, test } from 'vitest';
import stringLength from './stringLength';

describe('Rule "stringLength"', () => {
  const validate = stringLength({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate('_'.repeat(10))).toBe(true);
    expect(validate(['_'.repeat(10)])).toBe(true);
    expect(validate(['_'.repeat(10), '_'.repeat(10)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_'.repeat(1))).toBe(false);
    expect(validate(['_'.repeat(1)])).toBe(false);
    expect(validate(['_'.repeat(1), '_'.repeat(10)])).toBe(false);
  });
});
