import { describe, expect, test } from 'vitest';
import stringContains from './stringContains';

describe('Rule "stringContains"', () => {
  const validate = stringContains({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('_foo_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate('_bar_')).toBe(false);
  });
});
