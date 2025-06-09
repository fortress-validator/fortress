import { describe, expect, test } from 'vitest';
import notSubsetOf from './notSubsetOf';

describe('Rule "notSubsetOf"', () => {
  const validate = notSubsetOf({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('baz')).toBe(true);
    expect(validate(['baz'])).toBe(true);
    expect(validate(['baz', 'foo'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate(['foo'])).toBe(false);
    expect(validate(['foo', 'bar'])).toBe(false);
  });
});
