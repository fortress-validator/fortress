import { createTestFile } from '@fortress-validator/utils';
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
        locale: 'ko',
        fallbackLocale: 'zh-TW',
        locales: defaultLocales,
        rules: defaultRules,
      });

      expect(validator.getMessage('required')(validator.formattedName)).toBe('此欄位為必填');
    });

    test('the default message', () => {
      const validator = new FieldValidator({
        name: 'Input',
        locale: 'ko',
        fallbackLocale: 'ko',
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

      expect(validator.validate([])).toBe(true);
      expect(validator.validate(undefined)).toBe('The input field must be an array.');
      expect(validator.validate('')).toBe('The input field must be an array.');
    });

    test('with "arrayLength" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .arrayLength(10);

      expect(validator.validate(1)).toBe('The input field must be 10 items.');
    });

    test('with "arrayLengthBetween" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .arrayLengthBetween(10, 20);

      expect(validator.validate(Array.from('_'.repeat(9)))).toBe('The input field must be between 10 and 20 items.');
      expect(validator.validate(Array.from('_'.repeat(21)))).toBe('The input field must be between 10 and 20 items.');
    });

    test('with "arrayLengthGt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .arrayLengthGt(10);

      expect(validator.validate(Array.from('_'.repeat(10)))).toBe('The input field must be greater than 10 items.');
    });

    test('with "arrayLengthGte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .arrayLengthGte(10);

      expect(validator.validate(Array.from('_'.repeat(9)))).toBe('The input field must be greater than or equal to 10 items.');
    });

    test('with "arrayLengthLt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .arrayLengthLt(10);

      expect(validator.validate(Array.from('_'.repeat(10)))).toBe('The input field must be less than 10 items.');
    });

    test('with "arrayLengthLte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .arrayLengthLte(10);

      expect(validator.validate(Array.from('_'.repeat(11)))).toBe('The input field must be less than or equal to 10 items.');
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
      expect(validator.validate(21)).toBe('The input field must be between 10 and 20.');
    });

    test('with "boolean" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .boolean();

      expect(validator.validate('foo')).toBe('The input field must be a boolean value.');
    });

    test('with "containsAll" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .containsAll(['foo', 'bar']);

      expect(validator.validate(['foo', 'baz'])).toBe('The input field must contain all of the following values: "foo", "bar".');
    });

    test('with "containsAny" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .containsAny(['foo', 'bar']);

      expect(validator.validate(['baz'])).toBe('The input field must contain at least one of the following values: "foo", "bar".');
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

    test('with "domain" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .domain();

      expect(validator.validate('example.c')).toBe('The input field must be a valid domain.');
    });

    test('with "email" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .email();

      expect(validator.validate('foo')).toBe('The input field must be a valid email address.');
    });

    test('with "endsWith" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .endsWith('foo');

      expect(validator.validate('_')).toBe('The input field must end with "foo".');
    });

    test('with "equals" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .equals(undefined);

      expect(validator.validate(undefined)).toBe(true);
      expect(validator.validate('')).toBe('The input field must be equal to undefined.');
    });

    test('with "file" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .file();

      expect(validator.validate(undefined)).toBe(true);
      expect(validator.validate('foo')).toBe('The input field must be a file.');
    });

    test('with "fileSize" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .fileSize(10);

      expect(validator.validate(createTestFile(1))).toBe('The input field must be 10 kilobytes.');
    });

    test('with "fileSizeBetween" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .fileSizeBetween(10, 20);

      expect(validator.validate(createTestFile(9))).toBe('The input field must be between 10 and 20 kilobytes.');
      expect(validator.validate(createTestFile(21))).toBe('The input field must be between 10 and 20 kilobytes.');
    });

    test('with "fileSizeGt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .fileSizeGt(10);

      expect(validator.validate(createTestFile(10))).toBe('The input field must be greater than 10 kilobytes.');
    });

    test('with "fileSizeGte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .fileSizeGte(10);

      expect(validator.validate(createTestFile(9))).toBe('The input field must be greater than or equal to 10 kilobytes.');
    });

    test('with "fileSizeLt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .fileSizeLt(10);

      expect(validator.validate(createTestFile(10))).toBe('The input field must be less than 10 kilobytes.');
    });

    test('with "fileSizeLte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .fileSizeLte(10);

      expect(validator.validate(createTestFile(11))).toBe('The input field must be less than or equal to 10 kilobytes.');
    });

    test('with "gt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .gt(10);

      expect(validator.validate(10)).toBe('The input field must be greater than 10.');
    });

    test('with "gte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .gte(10);

      expect(validator.validate(9)).toBe('The input field must be greater than or equal to 10.');
    });

    test('with "http" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .http();

      expect(validator.validate('ftp://')).toBe('The input field must start with the "http://" protocol.');
    });

    test('with "http" and "ip" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .http()
        .ip();

      expect(validator.validate('http://127.0.0.1')).toBe(true);
      expect(validator.validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('http://256.256.256.256')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('http://[F:F:F:F:F:F:F:G]')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('127.0.0.1')).toBe('The input field must start with the "http://" protocol.');
      expect(validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('The input field must start with the "http://" protocol.');
    });

    test('with "http" and "ipv4" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .http()
        .ipv4();

      expect(validator.validate('http://127.0.0.1')).toBe(true);
      expect(validator.validate('http://256.256.256.256')).toBe('The input field must be a valid IPv4 address.');
      expect(validator.validate('127.0.0.1')).toBe('The input field must start with the "http://" protocol.');
    });

    test('with "http" and "ipv6" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .ipv6()
        .http();

      expect(validator.validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('http://[F:F:F:F:F:F:F:G]')).toBe('The input field must be a valid IPv6 address.');
      expect(validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('The input field must start with the "http://" protocol.');
    });

    test('with "httpOrHttps" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .httpOrHttps();

      expect(validator.validate('ftp://')).toBe('The input field must start with the "http://" or "https://" protocols.');
    });

    test('with "httpOrHttps" and "ip" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .httpOrHttps()
        .ip();

      expect(validator.validate('http://127.0.0.1')).toBe(true);
      expect(validator.validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('https://127.0.0.1')).toBe(true);
      expect(validator.validate('https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('http://256.256.256.256')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('http://[F:F:F:F:F:F:F:G]')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('https://256.256.256.256')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('https://[F:F:F:F:F:F:F:G]')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('127.0.0.1')).toBe('The input field must start with the "http://" or "https://" protocols.');
      expect(validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('The input field must start with the "http://" or "https://" protocols.');
    });

    test('with "httpOrHttps" and "ipv4" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .httpOrHttps()
        .ipv4();

      expect(validator.validate('http://127.0.0.1')).toBe(true);
      expect(validator.validate('https://127.0.0.1')).toBe(true);
      expect(validator.validate('127.0.0.1')).toBe('The input field must start with the "http://" or "https://" protocols.');
    });

    test('with "httpOrHttps" and "ipv6" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .ipv6()
        .httpOrHttps();

      expect(validator.validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('The input field must start with the "http://" or "https://" protocols.');
    });

    test('with "https" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .https();

      expect(validator.validate('http://')).toBe('The input field must start with the "https://" protocol.');
    });

    test('with "https" and "ip" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .https()
        .ip();

      expect(validator.validate('https://127.0.0.1')).toBe(true);
      expect(validator.validate('https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('https://256.256.256.256')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('https://[F:F:F:F:F:F:F:G]')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('127.0.0.1')).toBe('The input field must start with the "https://" protocol.');
      expect(validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('The input field must start with the "https://" protocol.');
    });

    test('with "https" and "ipv4" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .https()
        .ipv4();

      expect(validator.validate('https://127.0.0.1')).toBe(true);
      expect(validator.validate('127.0.0.1')).toBe('The input field must start with the "https://" protocol.');
    });

    test('with "https" and "ipv6" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .ipv6()
        .https();

      expect(validator.validate('https://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validator.validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe('The input field must start with the "https://" protocol.');
    });

    test('with "integer" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .integer();

      expect(validator.validate('foo')).toBe('The input field must be an integer.');
    });

    test('with "ip" rule"', () => {
      const validator = new FieldValidator(defaultParams)
        .ip();

      expect(validator.validate('256.256.256.256')).toBe('The input field must be a valid IP address.');
      expect(validator.validate('F:F:F:F:F:F:F:G')).toBe('The input field must be a valid IP address.');
    });

    test('with "ipv4" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .ipv4();

      expect(validator.validate('256.256.256.256')).toBe('The input field must be a valid IPv4 address.');
    });

    test('with "ipv6" rule"', () => {
      const validator = new FieldValidator(defaultParams)
        .ipv6();

      expect(validator.validate('F:F:F:F:F:F:F:G')).toBe('The input field must be a valid IPv6 address.');
    });

    test('with "json" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .json();

      expect(validator.validate('foo')).toBe('The input field must be a valid JSON string.');
    });

    test('with "lowercase" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .lowercase();

      expect(validator.validate('FOO')).toBe('The input field must be lowercase.');
    });

    test('with "lt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .lt(10);

      expect(validator.validate(10)).toBe('The input field must be less than 10.');
    });

    test('with "lte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .lte(10);

      expect(validator.validate(11)).toBe('The input field must be less than or equal to 10.');
    });

    test('with "notContainsAll" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notContainsAll(['foo', 'bar']);

      expect(validator.validate(['foo', 'bar'])).toBe('The input field must not contain all of the following values together: "foo", "bar".');
    });

    test('with "notContainsAny" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notContainsAny(['foo', 'bar']);

      expect(validator.validate(['foo', 'baz'])).toBe('The input field must not contain any of the following values: "foo", "bar".');
    });

    test('with "notEndsWith" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notEndsWith('foo');

      expect(validator.validate('foo')).toBe('The input field must not end with "foo".');
    });

    test('with "notEquals" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notEquals(undefined);

      expect(validator.validate('')).toBe(true);
      expect(validator.validate(undefined)).toBe('The input field must not be equal to undefined.');
    });

    test('with "notOneOf" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notOneOf(['foo', 'bar']);

      expect(validator.validate('foo')).toBe('The input field must not be one of the following values: "foo", "bar".');
    });

    test('with "notStartsWith" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notStartsWith('foo');

      expect(validator.validate('foo')).toBe('The input field must not start with "foo".');
    });

    test('with "notStartsWith" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notStartsWithNumber();

      expect(validator.validate('0')).toBe('The input field must not start with a number.');
    });

    test('with "notSubsetOf" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .notSubsetOf(['foo', 'bar']);

      expect(validator.validate(['foo'])).toBe('The input field must not be a subset of the following values: "foo", "bar".');
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

    test('with "object" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .object();

      expect(validator.validate('foo')).toBe('The input field must be an object.');
    });

    test('with "oneOf" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .oneOf(['foo', 'bar']);

      expect(validator.validate('baz')).toBe('The input field must be one of the following values: "foo", "bar".');
    });

    test('with "protocol" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .protocol(['http', 'https']);

      expect(validator.validate('ftp://')).toBe('The input field must start with one of the following protocols: "http://", "https://".');
    });

    test('with "protocol" and "url" rules', () => {
      const validator = new FieldValidator(defaultParams)
        .protocol('http')
        .url();

      expect(validator.validate('http://localhost')).toBe(true);
      expect(validator.validate('localhost')).toBe('The input field must start with the "http://" protocol.');
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
    });

    test('with "startsWith" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .startsWith('foo');

      expect(validator.validate('_')).toBe('The input field must start with "foo".');
    });

    test('with "startsWithNumber" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .startsWithNumber();

      expect(validator.validate('_')).toBe('The input field must start with a number.');
    });

    test('with "string" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .string();

      expect(validator.validate('')).toBe(true);
      expect(validator.validate(undefined)).toBe('The input field must be a string.');
      expect(validator.validate([])).toBe('The input field must be a string.');
    });

    test('with "stringContainsAll" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringContainsAll(['foo', 'bar']);

      expect(validator.validate('_foo_')).toBe('The input field must contain all of the following text: "foo", "bar".');
    });

    test('with "stringContainsAny" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringContainsAny(['foo', 'bar']);

      expect(validator.validate('_baz_')).toBe('The input field must contain at least one of the following text: "foo", "bar".');
    });

    test('with "stringLength" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringLength(10);

      expect(validator.validate('_'.repeat(1))).toBe('The input field must be 10 characters.');
    });

    test('with "stringLengthBetween" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringLengthBetween(10, 20);

      expect(validator.validate('_'.repeat(9))).toBe('The input field must be between 10 and 20 characters.');
      expect(validator.validate('_'.repeat(21))).toBe('The input field must be between 10 and 20 characters.');
    });

    test('with "stringLengthGt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringLengthGt(10);

      expect(validator.validate('_'.repeat(10))).toBe('The input field must be greater than 10 characters.');
    });

    test('with "stringLengthGte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringLengthGte(10);

      expect(validator.validate('_'.repeat(9))).toBe('The input field must be greater than or equal to 10 characters.');
    });

    test('with "stringLengthLt" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringLengthLt(10);

      expect(validator.validate('_'.repeat(10))).toBe('The input field must be less than 10 characters.');
    });

    test('with "stringLengthLte" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringLengthLte(10);

      expect(validator.validate('_'.repeat(11))).toBe('The input field must be less than or equal to 10 characters.');
    });

    test('with "stringNotContainsAll" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringNotContainsAll(['foo', 'bar']);

      expect(validator.validate('_foo_bar_')).toBe('The input field must not contain all of the following text together: "foo", "bar".');
    });

    test('with "stringNotContainsAny" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .stringNotContainsAny(['foo', 'bar']);

      expect(validator.validate('_foo_baz_')).toBe('The input field must not contain any of the following text: "foo", "bar".');
    });

    test('with "subsetOf" rule', () => {
      const validator = new FieldValidator(defaultParams)
        .subsetOf(['foo', 'bar']);

      expect(validator.validate(['baz'])).toBe('The input field must be a subset of the following values: "foo", "bar".');
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

    test('with "when" set to true', () => {
      const validator = new FieldValidator(defaultParams)
        .when(true)
        .alphaDash();

      expect(validator.validate('@')).toBe('The input field must only contain letters, numbers, dashes and underscores.');
    });

    test('with "when" set to false', () => {
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
