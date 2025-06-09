import { describe, expect, test } from 'vitest';
import arrayLengthGt from './arrayLengthGt';

describe('Rule "arrayLengthGt"', () => {
  const validate = arrayLengthGt({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate(Array.from('_'.repeat(11)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(Array.from('_'.repeat(10)))).toBe(false);
  });
});
