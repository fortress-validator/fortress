import { createTestFile } from '@fortress-validator/utils';
import { describe, expect, test } from 'vitest';
import fileSizeGte from './fileSizeGte';

describe('Rule "fileSizeGte"', () => {
  const validate = fileSizeGte({ size: 10 });

  test('should pass with valid input', () => {
    expect(validate(createTestFile(10))).toBe(true);
    expect(validate([createTestFile(10)])).toBe(true);
    expect(validate([createTestFile(10), createTestFile(11)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(createTestFile(9))).toBe(false);
    expect(validate([createTestFile(9)])).toBe(false);
    expect(validate([createTestFile(9), createTestFile(10)])).toBe(false);
  });
});
