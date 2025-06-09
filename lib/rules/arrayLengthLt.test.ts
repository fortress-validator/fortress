import { describe, expect, test } from 'vitest';
import arrayLengthLt from './arrayLengthLt';

describe('Rule "arrayLengthLt"', () => {
  const validate = arrayLengthLt({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate(Array.from('_'.repeat(9)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(Array.from('_'.repeat(10)))).toBe(false);
  });
});
