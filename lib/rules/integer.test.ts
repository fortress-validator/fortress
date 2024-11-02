import { describe, expect, test } from 'vitest';
import integer from './integer';

describe('Rule "integer"', () => {
  const validate = integer();

  test('should pass with valid input', () => {
    expect(validate(1)).toBe(true);
    expect(validate(0)).toBe(true);
    expect(validate(-1)).toBe(true);
    expect(validate(1.0)).toBe(true);
    expect(validate(0.0)).toBe(true);
    expect(validate(-1.0)).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('1')).toBe(false);
    expect(validate('0')).toBe(false);
    expect(validate('-1')).toBe(false);
    expect(validate(1.1)).toBe(false);
    expect(validate(0.1)).toBe(false);
    expect(validate(-1.1)).toBe(false);
    expect(validate(true)).toBe(false);
    expect(validate(false)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate({})).toBe(false);
  });
});
