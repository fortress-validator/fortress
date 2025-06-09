import { describe, expect, test } from 'vitest';
import gte from './gte';

describe('Rule "gte"', () => {
  const validate = gte({ value: 10 });

  test('should pass with valid input', () => {
    expect(validate(10)).toBe(true);
    expect(validate([10])).toBe(true);
    expect(validate([10, 11])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(9)).toBe(false);
    expect(validate([9])).toBe(false);
    expect(validate([9, 10])).toBe(false);
  });
});
