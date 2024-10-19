import pluginDate from '@fortress-validator/plugin-date';
import { describe, expect, test } from 'vitest';
import FormValidator from './FormValidator';

describe('FormValidator', () => {
  describe('should return', () => {
    test('the locale', () => {
      const validator = new FormValidator()
        .setLocale('zh-TW');

      expect(validator.getLocale()).toBe('zh-TW');
    });

    test('the fallback locale', () => {
      const validator = new FormValidator()
        .setFallbackLocale('zh-TW');

      expect(validator.getFallbackLocale()).toBe('zh-TW');
    });
  });

  describe('should throw', () => {
    test('an error for a non-existent default locale', () => {
      expect(() => new FormValidator({ locale: 'ja' })).toThrowError('The "ja" locale is not registered.');
    });

    test('an error for a non-existent fallback locale', () => {
      expect(() => new FormValidator({ fallbackLocale: 'ja' })).toThrowError('The "ja" fallback locale is not registered.');
    });
  });

  describe('should validate', () => {
    test('with "required" rule', () => {
      const validator = new FormValidator()
        .defineField('Input')
        .required()
        .alphaDash();

      // Pass cases
      expect(validator.validate('foo')).toBe(true);

      // Fail cases
      expect(validator.validate(undefined)).toBe('The input field is required.');
      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('without "required" rule', () => {
      const validator = new FormValidator()
        .defineField('Input')
        .alphaDash();

      // Pass cases
      expect(validator.validate(undefined)).toBe(true);
      expect(validator.validate('foo')).toBe(true);

      // Fail cases
      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('with "date" plugin and "required" rule', () => {
      const validator = new FormValidator()
        .registerPlugin(pluginDate)
        .defineField('Input')
        .required()
        .date('YYYY-MM-DD', true);

      // Pass cases
      expect(validator.validate('2024-02-29')).toBe(true);

      // Fail cases
      expect(validator.validate(undefined)).toBe('The input field is required.');
      expect(validator.validate('2024-02-30')).toBe('The input field must be a valid date.');
    });

    test('with "date" plugin without "required" rule', () => {
      const validator = new FormValidator()
        .registerPlugin(pluginDate)
        .defineField('Input')
        .date('YYYY-MM-DD', true);

      // Pass cases
      expect(validator.validate(undefined)).toBe(true);
      expect(validator.validate('2024-02-29')).toBe(true);

      // Fail cases
      expect(validator.validate('2024-02-30')).toBe('The input field must be a valid date.');
    });
  });
});
