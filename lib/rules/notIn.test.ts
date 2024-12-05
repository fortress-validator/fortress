import { describe, expect, test } from 'vitest';
import notIn from './notIn';

describe('Rule "notIn"', () => {
  const validate = notIn({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('baz')).toBe(true);
    expect(validate(['baz'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('bar')).toBe(false);
    expect(validate(['foo'])).toBe(false);
    expect(validate(['bar'])).toBe(false);
    expect(validate(['foo', 'bar'])).toBe(false);
  });
});
