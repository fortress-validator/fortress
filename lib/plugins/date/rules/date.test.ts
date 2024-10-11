import { describe, expect, test } from 'vitest';
import date from './date';

describe('Rule "date"', () => {
  const validate = date({ format: 'YYYY-MM-DD', strict: true });

  test('should pass with valid input', () => {
    expect(validate('2024-02-29')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('2024')).toBe(false);
    expect(validate('2024-02')).toBe(false);
    expect(validate('2024-02-30')).toBe(false);
  });
});
