import { describe, expect, test } from 'vitest';
import notContainsAny from './notContainsAny';

describe('Rule "notContainsAny"', () => {
  const validate = notContainsAny({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate(['baz'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['foo'])).toBe(false);
    expect(validate(['foo', 'baz'])).toBe(false);
    expect(validate(['foo', 'bar'])).toBe(false);
    expect(validate(['foo', 'bar', 'baz'])).toBe(false);
  });
});
