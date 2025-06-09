import { describe, expect, test } from 'vitest';
import gt from './gt';

describe('Rule "gt"', () => {
  const validate = gt({ value: 10 });

  test('should pass with valid input', () => {
    expect(validate(11)).toBe(true);
    expect(validate([11])).toBe(true);
    expect(validate([11, 12])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(10)).toBe(false);
    expect(validate([10])).toBe(false);
    expect(validate([10, 11])).toBe(false);
  });
});
