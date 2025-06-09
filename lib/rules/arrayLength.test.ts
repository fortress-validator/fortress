import { describe, expect, test } from 'vitest';
import arrayLength from './arrayLength';

describe('Rule "arrayLength"', () => {
  const validate = arrayLength({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate(Array.from('_'.repeat(10)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(Array.from('_'.repeat(1)))).toBe(false);
  });
});
