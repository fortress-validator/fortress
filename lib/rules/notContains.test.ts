import { describe, expect, test } from 'vitest';
import notContains from './notContains';

describe('Rule "notContains"', () => {
  const validate = notContains({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate(['bar'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['foo'])).toBe(false);
    expect(validate(['foo', 'bar'])).toBe(false);
  });
});
