import { describe, expect, test } from 'vitest';
import _in from './in';

describe('Rule "in"', () => {
  const validate = _in({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate('bar')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('baz')).toBe(false);
  });
});
