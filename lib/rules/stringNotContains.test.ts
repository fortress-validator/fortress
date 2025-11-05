import { describe, expect, test } from 'vitest';
import stringNotContains from './stringNotContains';

describe('Rule "stringNotContains"', () => {
  const validate = stringNotContains({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('_bar_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate('_foo_')).toBe(false);
  });
});
