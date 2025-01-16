import { describe, expect, test } from 'vitest';
import domain from './domain';

describe('Rule "domain"', () => {
  const validate = domain();

  test('should pass with valid input', () => {
    expect(validate('example.com')).toBe(true);
    expect(validate('www.example.com')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('example.c')).toBe(false);
    expect(validate('.com')).toBe(false);
  });
});
