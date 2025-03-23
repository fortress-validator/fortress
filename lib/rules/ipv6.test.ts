import { describe, expect, test } from 'vitest';
import ipv6 from './ipv6';

describe('Rule "ipv6"', () => {
  describe('without "includeProtocol"', () => {
    const validate = ipv6({});

    test('should pass with valid input', () => {
      expect(validate('2001:0db8:85a3:0000:0000:8a2e:0370:7334')).toBe(true);
      expect(validate('[2001:0db8:85a3:0000:0000:8a2e:0370:7334]:3000')).toBe(true);
      expect(validate('0:0:0:0:0:0:0:0')).toBe(true);
      expect(validate('F:F:F:F:F:F:F:F')).toBe(true);
      expect(validate('::1')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('localhost')).toBe(false);
      expect(validate('example.com')).toBe(false);
      expect(validate('F:F:F:F:F:F:F:G')).toBe(false);
      expect(validate('0')).toBe(false);
    });
  });

  describe('with "includeProtocol"', () => {
    const validate = ipv6({ includeProtocol: true });

    test('should pass with valid input', () => {
      expect(validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]')).toBe(true);
      expect(validate('http://[2001:0db8:85a3:0000:0000:8a2e:0370:7334]:3000')).toBe(true);
      expect(validate('http://[0:0:0:0:0:0:0:0]')).toBe(true);
      expect(validate('http://[F:F:F:F:F:F:F:F]')).toBe(true);
      expect(validate('http://[::1]')).toBe(true);
    });

    test('should fail with invalid input', () => {
      expect(validate(undefined)).toBe(false);
      expect(validate('http://localhost')).toBe(false);
      expect(validate('http://example.com')).toBe(false);
      expect(validate('http://[F:F:F:F:F:F:F:G]')).toBe(false);
      expect(validate('http://[0]')).toBe(false);
    });
  });
});
