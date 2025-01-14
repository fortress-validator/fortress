import { createTestFile } from '@fortress-validator/utils';
import { describe, expect, test } from 'vitest';
import between from './between';

describe('Rule "between"', () => {
  const validate = between({ min: 10, max: 20 });

  test('should pass with valid input', () => {
    expect(validate(15)).toBe(true);
    expect(validate('_'.repeat(15))).toBe(true);
    expect(validate(Array.from('_'.repeat(15)))).toBe(true);
    expect(validate(createTestFile(15))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(9)).toBe(false);
    expect(validate(21)).toBe(false);
    expect(validate('_'.repeat(9))).toBe(false);
    expect(validate('_'.repeat(21))).toBe(false);
    expect(validate(Array.from('_'.repeat(9)))).toBe(false);
    expect(validate(Array.from('_'.repeat(21)))).toBe(false);
    expect(validate(createTestFile(9))).toBe(false);
    expect(validate(createTestFile(21))).toBe(false);
  });
});
