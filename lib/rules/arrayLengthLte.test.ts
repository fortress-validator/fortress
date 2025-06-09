import { describe, expect, test } from 'vitest';
import arrayLengthLte from './arrayLengthLte';

describe('Rule "arrayLengthLte"', () => {
  const validate = arrayLengthLte({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate(Array.from('_'.repeat(10)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(Array.from('_'.repeat(11)))).toBe(false);
  });
});
