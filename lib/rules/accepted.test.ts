import { describe, expect, test } from 'vitest';
import accepted from './accepted';

describe('Rule "accepted"', () => {
  const validate = accepted();

  test('should pass with valid input', () => {
    expect(validate('y')).toBe(true);
    expect(validate('yes')).toBe(true);
    expect(validate('on')).toBe(true);
    expect(validate('1')).toBe(true);
    expect(validate('true')).toBe(true);
    expect(validate(1)).toBe(true);
    expect(validate(true)).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
  });
});
