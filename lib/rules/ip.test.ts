import { describe, expect, test } from 'vitest';
import ip from './ip';

describe('Rule "ip"', () => {
  describe('without "includeProtocol"', () => {
    const validate = ip({});

    test('should pass with valid input', () => {
      expect(validate('127.0.0.1')).toBe(true);
      expect(validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('localhost')).toBe(false);
      expect(validate('example.com')).toBe(false);
    });
  });

  describe('with "includeProtocol"', () => {
    const validate = ip({ includeProtocol: true });

    test('should pass with valid input', () => {
      expect(validate('http://127.0.0.1')).toBe(true);
      expect(validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('http://localhost')).toBe(false);
      expect(validate('http://example.com')).toBe(false);
    });
  });
});
