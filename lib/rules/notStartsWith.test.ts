import { describe, expect, test } from 'vitest';
import notStartsWith from './notStartsWith';

describe('Rule "notStartsWith"', () => {
  const validate = notStartsWith({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo_')).toBe(false);
    expect(validate('FOO_')).toBe(false);
  });
});
