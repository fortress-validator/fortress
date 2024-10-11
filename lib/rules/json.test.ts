import { describe, expect, test } from 'vitest';
import json from './json';

describe('Rule "json"', () => {
  const validate = json();

  test('should pass with valid input', () => {
    expect(validate('{"foo":"bar"}')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('foo')).toBe(false);
    expect(validate('{"foo":"bar"')).toBe(false);
  });
});
