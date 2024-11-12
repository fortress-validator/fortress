import { describe, expect, test } from 'vitest';
import containsAll from './containsAll';

describe('Rule "containsAll"', () => {
  const validate = containsAll({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate(['foo', 'bar'])).toBe(true);
    expect(validate(['foo', 'bar', 'baz'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['foo'])).toBe(false);
    expect(validate(['foo', 'baz'])).toBe(false);
  });
});
