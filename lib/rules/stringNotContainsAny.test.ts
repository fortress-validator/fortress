import { describe, expect, test } from 'vitest';
import stringNotContainsAny from './stringNotContainsAny';

describe('Rule "stringNotContainsAny"', () => {
  const validate = stringNotContainsAny({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('_baz_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate('_foo')).toBe(false);
    expect(validate('_foo_baz_')).toBe(false);
    expect(validate('_foo_bar_')).toBe(false);
    expect(validate('_foo_bar_baz_')).toBe(false);
  });
});
