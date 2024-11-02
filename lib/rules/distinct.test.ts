import { describe, expect, test } from 'vitest';
import distinct from './distinct';

describe('Rule "distinct"', () => {
  const validate = distinct();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate(['foo'])).toBe(true);
    expect(validate(['foo', 'bar'])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate(['foo', 'foo'])).toBe(false);
  });
});
