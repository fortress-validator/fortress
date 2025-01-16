import { describe, expect, test } from 'vitest';
import startsWith from './startsWith';

describe('Rule "startsWith"', () => {
  const validate = startsWith({ value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('foo_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_')).toBe(false);
  });
});
