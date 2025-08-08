import { describe, expect, test } from 'vitest';
import notStartsWithNumber from './notStartsWithNumber';

describe('Rule "notStartsWithNumber"', () => {
  const validate = notStartsWithNumber();

  test('should pass with valid input', () => {
    expect(validate('_')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('0')).toBe(false);
    expect(validate('0.0')).toBe(false);
  });
});
