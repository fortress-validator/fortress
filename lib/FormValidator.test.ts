import pluginDate from '@fortress-validator/plugin-date';
import pluginJSONSchema from '@fortress-validator/plugin-json-schema';
import type { Rule } from '@fortress-validator/types';
import { describe, expect, test } from 'vitest';
import FormValidator from './FormValidator';

describe('FormValidator', () => {
  describe('should apply', () => {
    test('the locale', () => {
      const validator = new FormValidator()
        .setLocale('zh-TW');

      expect(validator.getLocale()).toBe('zh-TW');
      expect(validator.getFallbackLocale()).toBe('en');
      expect(validator.defineField('Input').required().validate('')).toBe('此欄位為必填');
    });

    test('the fallback locale', () => {
      const validator = new FormValidator()
        .setLocale('ko')
        .setFallbackLocale('zh-TW');

      expect(validator.getLocale()).toBe('ko');
      expect(validator.getFallbackLocale()).toBe('zh-TW');
      expect(validator.defineField('Input').required().validate('')).toBe('此欄位為必填');
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

    describe('for "date" plugin', () => {
      test('with "after" rule', () => {
        const validator = new FormValidator({
          plugins: [
            pluginDate,
          ],
        })
          .defineField('Input')
          .after('2024-02-28', 'YYYY-MM-DD', 'YYYY/MM/DD');

        // Pass cases
        expect(validator.validate(undefined)).toBe(true);
        expect(validator.validate('2024-02-29')).toBe(true);

        // Fail cases
        expect(validator.validate('2024-02-27')).toBe('The input field must be a date after 2024/02/28.');
      });

      test('with "before" rule', () => {
        const validator = new FormValidator({
          plugins: [
            pluginDate,
          ],
        })
          .defineField('Input')
          .before('2024-02-28', 'YYYY-MM-DD', 'YYYY/MM/DD');

        // Pass cases
        expect(validator.validate(undefined)).toBe(true);
        expect(validator.validate('2024-02-27')).toBe(true);

        // Fail cases
        expect(validator.validate('2024-02-29')).toBe('The input field must be a date before 2024/02/28.');
      });

      test('with "date" rule', () => {
        const validator = new FormValidator({
          plugins: [
            pluginDate,
          ],
        })
          .defineField('Input')
          .date('YYYY-MM-DD');

        // Pass cases
        expect(validator.validate(undefined)).toBe(true);
        expect(validator.validate('2024-02-29')).toBe(true);

        // Fail cases
        expect(validator.validate('2024-02-30')).toBe('The input field must match the YYYY-MM-DD format.');
      });

      test('with "iso8601" rule', () => {
        const validator = new FormValidator({
          plugins: [
            pluginDate,
          ],
        })
          .defineField('Input')
          .iso8601();

        // Pass cases
        expect(validator.validate(undefined)).toBe(true);
        expect(validator.validate('2024-02-29T12:00:00')).toBe(true);

        // Fail cases
        expect(validator.validate('2024-02-29')).toBe('The input field must be a valid ISO 8601 date.');
      });
    });

    describe('for custom plugin', () => {
      test('with "json" rule', () => {
        const validator = new FormValidator({
          plugins: [
            {
              rules: {
                multipleOf: (({ factor }: { factor: number }) => (input: unknown) => Number(input) % factor === 0) as Rule<unknown>,
              },
              locales: {
                en: {
                  multipleOf: (field, args) => {
                    const { factor } = args as { factor: number };
                    return `The ${field} field must be a multiple of ${factor}.`;
                  },
                },
              },
            },
          ],
        })
          .defineField('Input')
          .apply('multipleOf', { factor: 2 });

        // Pass cases
        expect(validator.validate(undefined)).toBe(true);
        expect(validator.validate(0)).toBe(true);

        // Fail cases
        expect(validator.validate(1)).toBe('The input field must be a multiple of 2.');
      });
    });

    describe('for "json-schema" plugin', () => {
      test('with "jsonSchema" rule', () => {
        const schema = {
          type: 'object',
          required: [
            'title',
          ],
        };

        const validator = new FormValidator({
          plugins: [
            pluginJSONSchema,
          ],
        })
          .defineField('Input')
          .jsonSchema(schema);

        // Pass cases
        expect(validator.validate(undefined)).toBe(true);
        expect(validator.validate(JSON.stringify({ title: 'foo' }))).toBe(true);

        // Fail cases
        expect(validator.validate(JSON.stringify(true))).toBe('The input field must be object.');
        expect(validator.validate(JSON.stringify({}))).toBe('The input field must have required property "title".');
      });
    });
  });
});
