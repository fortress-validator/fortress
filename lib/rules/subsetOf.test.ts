import { describe, expect, test } from 'vitest';
import subsetOf from './subsetOf';

describe('Rule "subsetOf"', () => {
  const validate = subsetOf({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate(['foo'])).toBe(true);
    expect(validate(['foo', 'bar'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('baz')).toBe(false);
    expect(validate(['baz'])).toBe(false);
    expect(validate(['baz', 'foo'])).toBe(false);
  });
});
