import { describe, expect, test } from 'vitest';
import stringContainsAny from './stringContainsAny';

describe('Rule "stringContainsAny"', () => {
  const validate = stringContainsAny({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('_foo_')).toBe(true);
    expect(validate('_foo_bar_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate('_baz_')).toBe(false);
  });
});
