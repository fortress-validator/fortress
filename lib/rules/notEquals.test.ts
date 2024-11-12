import { describe, expect, test } from 'vitest';
import notEquals from './notEquals';

describe('Rule "notEquals"', () => {
  const validate = notEquals({ value: undefined });

  test('should pass with valid input', () => {
    expect(validate('')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
  });
});
