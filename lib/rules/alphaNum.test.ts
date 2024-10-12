import { describe, expect, test } from 'vitest';
import alphaNum from './alphaNum';

describe('Rule "alphaNum"', () => {
  const validate = alphaNum();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate('0')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('-')).toBe(false);
    expect(validate('@')).toBe(false);
    expect(validate('.')).toBe(false);
  });
});
