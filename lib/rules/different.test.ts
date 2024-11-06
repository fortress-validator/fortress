import { describe, expect, test } from 'vitest';
import different from './different';

describe('Rule "different"', () => {
  const validate = different({ field: 'other', value: 'foo' });

  test('should pass with valid input', () => {
    expect(validate('bar')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
  });
});
