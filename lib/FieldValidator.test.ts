import { describe, expect, test } from 'vitest';
import FieldValidator from './FieldValidator';
import defaultLocales from './locales';
import defaultRules from './rules';

const defaultParams = {
  name: 'Input',
  locale: 'en',
  fallbackLocale: 'en',
  locales: defaultLocales,
  rules: defaultRules,
};

describe('FieldValidator', () => {
  describe('should throw', () => {
    test('an error for a non-existent rule', () => {
      const validator = new FieldValidator({
        name: 'Input',
        locale: 'zh-TW',
        fallbackLocale: 'en',
        locales: defaultLocales,
        rules: defaultRules,
      })
        .apply('foo');

      expect(() => validator.getRule('foo')).toThrowError('The "foo" rule is not registered.');
    });
  });

  describe('should return', () => {
    test('the message in the specified locale', () => {
      const validator = new FieldValidator({
        name: 'Input',
        locale: 'zh-TW',
        fallbackLocale: 'en',
        locales: defaultLocales,
        rules: defaultRules,
      });

      expect(validator.getMessage('required')(validator.formattedName)).toBe('此欄位為必填');
    });

    test('the message in the specified fallback locale', () => {
      const validator = new FieldValidator({
        name: 'Input',
        locale: 'ja',
        fallbackLocale: 'zh-TW',
        locales: defaultLocales,
        rules: defaultRules,
      });

      expect(validator.getMessage('required')(validator.formattedName)).toBe('此欄位為必填');
    });

    test('the default message', () => {
      const validator = new FieldValidator({
        name: 'Input',
        locale: 'ja',
        fallbackLocale: 'ja',
        locales: defaultLocales,
        rules: defaultRules,
      });

      expect(validator.getMessage('required')(validator.formattedName)).toBe('The input field is invalid.');
    });
  });

  describe('should validate', () => {
    test('with "alpha" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .alpha();

      expect(validator.validate('@')).toBe('The input field must only contain letters.');
    });

    test('with "accepted" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .accepted();

      expect(validator.validate('@')).toBe('The input field must be accepted.');
    });

    test('with "alphaDash" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .alphaDash();

      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('with "alphaDashDot" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .alphaDashDot();

      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes, underscores and dots.');
    });

    test('with "alphaNum" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .alphaNum();

      expect(validator.validate('@')).toBe('The input field must only contain letters and numbers.');
    });

    test('with "array" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .array();

      expect(validator.validate('foo')).toBe('The input field must be an array.');
    });

    test('with "ascii" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .ascii();

      expect(validator.validate('â')).toBe('The input field must only contain ASCII characters and symbols.');
    });

    test('with "between" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .between(10, 20);

      expect(validator.validate(9)).toBe('The input field must be between 10 and 20.');
      expect(validator.validate('_'.repeat(9))).toBe('The input field must be between 10 and 20 characters.');
      expect(validator.validate(Array.from('_'.repeat(9)))).toBe('The input field must be between 10 and 20 items.');
      expect(validator.validate(new File(['_'.repeat(9 * 1024)], ''))).toBe('The input field must be between 10 and 20 kilobytes.');

      expect(validator.validate(21)).toBe('The input field must be between 10 and 20.');
      expect(validator.validate('_'.repeat(21))).toBe('The input field must be between 10 and 20 characters.');
      expect(validator.validate(Array.from('_'.repeat(21)))).toBe('The input field must be between 10 and 20 items.');
      expect(validator.validate(new File(['_'.repeat(21 * 1024)], ''))).toBe('The input field must be between 10 and 20 kilobytes.');
    });

    test('with "boolean" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .boolean();

      expect(validator.validate('foo')).toBe('The input field must be a boolean value.');
    });

    test('with "contains" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .contains(['foo', 'bar']);

      expect(validator.validate('_')).toBe('The input field must be one of the following: foo, bar.');
    });

    test('with "containsAll" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .containsAll(['foo', 'bar']);

      expect(validator.validate(['foo', 'baz'])).toBe('The input field must contain all of the following: foo, bar.');
    });

    test('with "containsAny" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .containsAny(['foo', 'bar']);

      expect(validator.validate(['baz'])).toBe('The input field must contain at least one of the following: foo, bar.');
    });

    test('with "declined" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .declined();

      expect(validator.validate('foo')).toBe('The input field must be declined.');
    });

    test('with "different" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .different('other', 'foo');

      expect(validator.validate('foo')).toBe('The input and other fields must be different.');
    });

    test('with "distinct" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .distinct();

      expect(validator.validate(['foo', 'foo'])).toBe('The input field must not contain duplicate values.');
    });

    test('with "email" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .email();

      expect(validator.validate('foo')).toBe('The input field must be a valid email address.');
    });

    test('with "endsWith" rule set to a string', () => {
      const validator = new FieldValidator(defaultParams)
        .endsWith('foo');

      expect(validator.validate('_')).toBe('The input field must end with foo.');
    });

    test('with "endsWith" rule set to an array', () => {
      const validator = new FieldValidator(defaultParams)
        .endsWith(['foo', 'bar']);

      expect(validator.validate('_')).toBe('The input field must end with one of the following: foo, bar.');
    });

    test('with "integer" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .integer();

      expect(validator.validate('foo')).toBe('The input field must be an integer.');
    });

    test('with "json" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .json();

      expect(validator.validate('_')).toBe('The input field must be a valid JSON string.');
    });

    test('with "lowercase" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .lowercase();

      expect(validator.validate('FOO')).toBe('The input field must be lowercase.');
    });

    test('with "max" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .max(10);

      expect(validator.validate(11)).toBe('The input field must not be greater than 10.');
      expect(validator.validate('_'.repeat(11))).toBe('The input field must not be greater than 10 characters.');
      expect(validator.validate(Array.from('_'.repeat(11)))).toBe('The input field must not be greater than 10 items.');
      expect(validator.validate(new File(['_'.repeat(11 * 1024)], ''))).toBe('The input field must not be greater than 10 kilobytes.');
    });

    test('with "min" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .min(10);

      expect(validator.validate(9)).toBe('The input field must be at least 10.');
      expect(validator.validate('_'.repeat(9))).toBe('The input field must be at least 10 characters.');
      expect(validator.validate(Array.from('_'.repeat(9)))).toBe('The input field must be at least 10 items.');
      expect(validator.validate(new File(['_'.repeat(9 * 1024)], ''))).toBe('The input field must be at least 10 kilobytes.');
    });

    test('with "notIn" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notIn(['foo', 'bar']);

      expect(validator.validate('foo')).toBe('The input field must not be one of the following: foo, bar.');
    });

    test('with "number" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .number();

      expect(validator.validate('foo')).toBe('The input field must be a number.');
    });

    test('with "numeric" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .numeric();

      expect(validator.validate('foo')).toBe('The input field must be a number.');
    });

    test('with "regex" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .regex(/^[0-9]$/);

      expect(validator.validate('00')).toBe('The input field must match the required format.');
    });

    test('with "required" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .required()
        .alphaDash();

      expect(validator.validate(undefined)).toBe('The input field is required.');
      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('with "same" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .same('other', 'foo');

      expect(validator.validate('bar')).toBe('The input and other fields must match.');
    });

    test('with "size" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .size(10);

      expect(validator.validate(1)).toBe('The input field must be 10.');
      expect(validator.validate('_'.repeat(1))).toBe('The input field must be 10 characters.');
      expect(validator.validate(Array.from('_'.repeat(1)))).toBe('The input field must contain 10 items.');
      expect(validator.validate(new File(['_'.repeat(1 * 1024)], ''))).toBe('The input field must be 10 kilobytes.');
    });

    test('with "startsWith" rule set to a string', () => {
      const validator = new FieldValidator(defaultParams)
        .startsWith('foo');

      expect(validator.validate('_')).toBe('The input field must start with foo.');
    });

    test('with "string" rule set to a string', () => {
      const validator = new FieldValidator(defaultParams)
        .string();

      expect(validator.validate(true)).toBe('The input field must be a string.');
    });

    test('with "startsWith" rule set to an array', () => {
      const validator = new FieldValidator(defaultParams)
        .startsWith(['foo', 'bar']);

      expect(validator.validate('_')).toBe('The input field must start with one of the following: foo, bar.');
    });

    test('with "unique" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .unique(['foo', 'bar']);

      expect(validator.validate('foo')).toBe('The input field has already been taken.');
    });

    test('with "uppercase" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .uppercase();

      expect(validator.validate('foo')).toBe('The input field must be uppercase.');
    });

    test('with "url" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .url();

      expect(validator.validate('foo')).toBe('The input field must be a valid URL.');
    });

    test('with "when" condition set to true', () => {
      const validator = new FieldValidator(defaultParams)
        .when(true)
        .alphaDash();

      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('with "when" condition set to false', () => {
      const validator = new FieldValidator(defaultParams)
        .when(false)
        .alphaDash();

      expect(validator.validate(undefined)).toBe(true);
    });

    test('with "when" condition enabling a specific rule', () => {
      const validator = new FieldValidator(defaultParams)
        .when({ required: true })
        .required()
        .alphaDash();

      expect(validator.validate(undefined)).toBe('The input field is required.');
    });

    test('with "when" condition disabling a specific rule', () => {
      const validator = new FieldValidator(defaultParams)
        .when({ required: false })
        .required()
        .alphaDash();

      expect(validator.validate(undefined)).toBe(true);
      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('with "requiredWhen" set to true', () => {
      const validator = new FieldValidator(defaultParams)
        .requiredWhen(true)
        .alphaDash();

      expect(validator.validate(undefined)).toBe('The input field is required.');
    });

    test('with "requiredWhen" set to false', () => {
      const validator = new FieldValidator(defaultParams)
        .requiredWhen(false)
        .alphaDash();

      expect(validator.validate(undefined)).toBe(true);
      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });
  });
});
