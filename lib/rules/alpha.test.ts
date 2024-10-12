import { describe, expect, test } from 'vitest';
import alpha from './alpha';

describe('Rule "alpha"', () => {
  const validate = alpha();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('0')).toBe(false);
    expect(validate('-')).toBe(false);
    expect(validate('@')).toBe(false);
    expect(validate('.')).toBe(false);
  });
});
