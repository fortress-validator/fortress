import { describe, expect, test } from 'vitest';
import ascii from './ascii';

describe('Rule "ascii"', () => {
  const validate = ascii();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate(' ')).toBe(true);
    expect(validate('~')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('â')).toBe(false);
  });
});
