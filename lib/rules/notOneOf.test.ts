import { describe, expect, test } from 'vitest';
import notOneOf from './notOneOf';

describe('Rule "notOneOf"', () => {
  const validate = notOneOf({ values: ['foo', 'bar'] });

  test('should pass with valid input', () => {
    expect(validate('baz')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('bar')).toBe(false);
  });
});
