import { describe, expect, test } from 'vitest';
import ipv4 from './ipv4';

describe('Rule "ipv4"', () => {
  describe('without "includeProtocol"', () => {
    const validate = ipv4({});

    test('should pass with valid input', () => {
      expect(validate('127.0.0.1')).toBe(true);
      expect(validate('127.0.0.1:3000')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('localhost')).toBe(false);
      expect(validate('example.com')).toBe(false);
      expect(validate('256.256.256.256')).toBe(false);
    });
  });

  describe('with "includeProtocol"', () => {
    const validate = ipv4({ includeProtocol: true });

    test('should pass with valid input', () => {
      expect(validate('http://127.0.0.1')).toBe(true);
      expect(validate('http://127.0.0.1:3000')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('http://localhost')).toBe(false);
      expect(validate('http://example.com')).toBe(false);
      expect(validate('http://256.256.256.256')).toBe(false);
    });
  });
});
