import { describe, expect, test } from 'vitest';
import regex from './regex';

describe('Rule "regex"', () => {
  describe('using a valid expression', () => {
    const validate = regex({ expression: /^[0-9]$/ });

    test('should pass with valid input', () => {
      expect(validate('0')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('00')).toBe(false);
      expect(validate('foo')).toBe(false);
    });
  });

  describe('using a invalid expression', () => {
    test('should fail with invalid input', () => {
      // @ts-expect-error: Testing invalid input
      const validate = regex({ expression: 'foo' as unknown });

      expect(() => validate('foo')).toThrowError('The expression provided is not a valid RegExp.');
    });
  });
});
