import { describe, expect, test } from 'vitest';
import between from './between';

describe('Rule "between"', () => {
  const validate = between({ min: 10, max: 20 });

  test('should pass with valid input', () => {
    expect(validate(15)).toBe(true);
    expect(validate([15])).toBe(true);
    expect(validate([15, 15])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(9)).toBe(false);
    expect(validate(21)).toBe(false);
    expect(validate([9])).toBe(false);
    expect(validate([9, 15])).toBe(false);
    expect(validate([21])).toBe(false);
    expect(validate([21, 15])).toBe(false);
  });
});
