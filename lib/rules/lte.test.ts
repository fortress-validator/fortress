import { describe, expect, test } from 'vitest';
import lte from './lte';

describe('Rule "lte"', () => {
  const validate = lte({ value: 10 });

  test('should pass with valid input', () => {
    expect(validate(10)).toBe(true);
    expect(validate([10])).toBe(true);
    expect(validate([10, 9])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(11)).toBe(false);
    expect(validate([11])).toBe(false);
    expect(validate([11, 10])).toBe(false);
  });
});
