import { describe, expect, test } from 'vitest';
import notContainsAll from './notContainsAll';

describe('Rule "notContainsAll"', () => {
  const validate = notContainsAll({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate(['foo'])).toBe(true);
    expect(validate(['baz'])).toBe(true);
    expect(validate(['foo', 'baz'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['foo', 'bar'])).toBe(false);
    expect(validate(['foo', 'bar', 'baz'])).toBe(false);
  });
});
