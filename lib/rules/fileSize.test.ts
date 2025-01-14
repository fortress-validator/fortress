import { describe, expect, test } from 'vitest';
import fileSize from './fileSize';
import { createTestFile } from '@fortress-validator/utils';

describe('Rule "fileSize"', () => {
  const validate = fileSize({ size: 10 });

  test('should pass with valid input', () => {
    expect(validate(createTestFile(10))).toBe(true);
    expect(validate(createTestFile(10.1))).toBe(true);
    expect(validate(createTestFile(10.9))).toBe(true);
    expect(validate([createTestFile(10), createTestFile(10)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(createTestFile(1))).toBe(false);
    expect(validate(createTestFile(9.9))).toBe(false);
    expect(validate(createTestFile(11))).toBe(false);
    expect(validate([createTestFile(1), createTestFile(10)])).toBe(false);
  });
});
