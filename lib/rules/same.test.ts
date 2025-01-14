import { describe, expect, test } from 'vitest';
import same from './same';

describe('Rule "same"', () => {
  const validate = same({ field: 'other', value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate(['foo'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('bar')).toBe(false);
    expect(validate(['bar'])).toBe(false);
    expect(validate(['foo', 'bar'])).toBe(false);
  });
});
