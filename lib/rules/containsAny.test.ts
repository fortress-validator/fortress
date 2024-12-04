import { describe, expect, test } from 'vitest';
import containsAny from './containsAny';

describe('Rule "containsAny"', () => {
  const validate = containsAny({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate(['foo'])).toBe(true);
    expect(validate(['foo', 'bar'])).toBe(true);
    expect(validate(['foo', 'baz'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['baz'])).toBe(false);
  });
});