import { describe, expect, test } from 'vitest';
import endsWith from './endsWith';

describe('Rule "endsWith"', () => {
  const validate = endsWith({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('_foo')).toBe(true);
    expect(validate('_FOO')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_')).toBe(false);
  });
});
