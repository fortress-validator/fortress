import { describe, expect, test } from 'vitest';
import declined from './declined';

describe('Rule "declined"', () => {
  const validate = declined();

  test('should pass with valid input', () => {
    expect(validate('n')).toBe(true);
    expect(validate('no')).toBe(true);
    expect(validate('off')).toBe(true);
    expect(validate('0')).toBe(true);
    expect(validate('false')).toBe(true);
    expect(validate(0)).toBe(true);
    expect(validate(false)).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
  });
});
