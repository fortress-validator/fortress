import { createTestFile } from '@fortress-validator/utils';
import { describe, expect, test } from 'vitest';
import fileSizeLt from './fileSizeLt';

describe('Rule "fileSizeLt"', () => {
  const validate = fileSizeLt({ size: 10 });

  test('should pass with valid input', () => {
    expect(validate(createTestFile(9))).toBe(true);
    expect(validate([createTestFile(9)])).toBe(true);
    expect(validate([createTestFile(9), createTestFile(8)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(createTestFile(10))).toBe(false);
    expect(validate([createTestFile(10)])).toBe(false);
    expect(validate([createTestFile(10), createTestFile(9)])).toBe(false);
  });
});
