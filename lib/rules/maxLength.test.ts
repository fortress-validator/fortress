import { describe, expect, test } from 'vitest';
import maxLength from './maxLength';

describe('Rule "maxLength"', () => {
  const validate = maxLength({ length: 10 });

  test('should pass with valid input', () => {
    expect(validate(Array.from('_'.repeat(10)))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(Array.from('_'.repeat(11)))).toBe(false);
  });
});
