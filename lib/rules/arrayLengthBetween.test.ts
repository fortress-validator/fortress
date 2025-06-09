import { describe, expect, test } from 'vitest';
import arrayLengthBetween from './arrayLengthBetween';

describe('Rule "arrayLengthBetween"', () => {
  const validate = arrayLengthBetween({ min: 10, max: 20 });

  test('should pass with valid input', () => {
    expect(validate(Array.from('_'.repeat(15)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(Array.from('_'.repeat(9)))).toBe(false);
    expect(validate(Array.from('_'.repeat(21)))).toBe(false);
  });
});
