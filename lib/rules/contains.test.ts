import { describe, expect, test } from 'vitest';
import contains from './contains';

describe('Rule "contains"', () => {
  const validate = contains({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate(['foo'])).toBe(true);
    expect(validate(['foo', 'bar'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['bar'])).toBe(false);
  });
});
