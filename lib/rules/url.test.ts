import { describe, expect, test } from 'vitest';
import url from './url';

describe('Rule "url"', () => {
  const validate = url();

  test('should pass with valid input', () => {
    expect(validate('http://example.com')).toBe(true);
    expect(validate('https://example.com')).toBe(true);
    expect(validate('https://example.com/')).toBe(true);
    expect(validate('https://example.com#foo')).toBe(true);
    expect(validate('https://example.com?foo=bar')).toBe(true);
    expect(validate('https://example.com/foo.txt')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('example.com')).toBe(false);
    expect(validate('http://')).toBe(false);
    expect(validate('http://.com')).toBe(false);
    expect(validate('http://example.')).toBe(false);
    expect(validate('http://example.c')).toBe(false);
    expect(validate('http://example.00')).toBe(false);
  });
});
