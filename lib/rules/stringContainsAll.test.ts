import { describe, expect, test } from 'vitest';
import stringContainsAll from './stringContainsAll';

describe('Rule "stringContainsAll"', () => {
  const validate = stringContainsAll({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('_foo_bar_')).toBe(true);
    expect(validate('_foo_bar_baz_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate('_foo_')).toBe(false);
  });
});
