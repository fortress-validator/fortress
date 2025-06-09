import { describe, expect, test } from 'vitest';
import lt from './lt';

describe('Rule "lt"', () => {
  const validate = lt({ value: 10 });

  test('should pass with valid input', () => {
    expect(validate(9)).toBe(true);
    expect(validate([9])).toBe(true);
    expect(validate([9, 8])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(10)).toBe(false);
    expect(validate([10])).toBe(false);
    expect(validate([10, 9])).toBe(false);
  });
});
