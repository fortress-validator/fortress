import { describe, expect, test } from 'vitest';
import unique from './unique';

describe('Rule "unique"', () => {
  describe('without ignored', () => {
    const validate = unique({ values: ['foo', 'bar'] });

    test('should pass with valid input', () => {
      expect(validate('baz')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('foo')).toBe(false);
      expect(validate('bar')).toBe(false);
    });
  });

  describe('with ignored set to a string', () => {
    const validate = unique({ values: ['foo', 'bar'], ignored: 'foo' });

    test('should pass with valid input', () => {
      expect(validate('foo')).toBe(true);
      expect(validate('baz')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('bar')).toBe(false);
    });
  });

  describe('with ignored set to an array', () => {
    const validate = unique({ values: ['foo', 'bar'], ignored: ['foo'] });

    test('should pass with valid input', () => {
      expect(validate('foo')).toBe(true);
      expect(validate('baz')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('bar')).toBe(false);
    });
  });
});
