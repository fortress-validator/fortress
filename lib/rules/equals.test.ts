import { describe, expect, test } from 'vitest';
import equals from './equals';

describe('Rule "equals"', () => {
  const validate = equals({ value: undefined });

  test('should pass with valid input', () => {
    expect(validate(undefined)).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate('')).toBe(false);
  });
});
