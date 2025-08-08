import { describe, expect, test } from 'vitest';
import notEndsWith from './notEndsWith';

describe('Rule "notEndsWith"', () => {
  const validate = notEndsWith({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_foo')).toBe(false);
    expect(validate('_FOO')).toBe(false);
  });
});
