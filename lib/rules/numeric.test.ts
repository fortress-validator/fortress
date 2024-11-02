import { describe, expect, test } from 'vitest';
import numeric from './numeric';

describe('Rule "numeric"', () => {
  const validate = numeric();

  test('should pass with valid input', () => {
    expect(validate(1)).toBe(true);
    expect(validate(0)).toBe(true);
    expect(validate(-1)).toBe(true);
    expect(validate(1.0)).toBe(true);
    expect(validate(0.0)).toBe(true);
    expect(validate(-1.0)).toBe(true);
    expect(validate('1')).toBe(true);
    expect(validate('0')).toBe(true);
    expect(validate('-1')).toBe(true);
    expect(validate('1.0')).toBe(true);
    expect(validate('0.0')).toBe(true);
    expect(validate('-1.0')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('0_foo')).toBe(false);
    expect(validate('foo_0')).toBe(false);
    expect(validate(true)).toBe(false);
    expect(validate(false)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate({})).toBe(false);
  });
});
