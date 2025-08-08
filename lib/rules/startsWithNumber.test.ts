import { describe, expect, test } from 'vitest';
import startsWithNumber from './startsWithNumber';

describe('Rule "startsWithNumber"', () => {
  const validate = startsWithNumber();

  test('should pass with valid input', () => {
    expect(validate('0')).toBe(true);
    expect(validate('0.0')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('_')).toBe(false);
  });
});
