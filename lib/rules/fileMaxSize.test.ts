import { createTestFile } from '@fortress-validator/utils';
import { describe, expect, test } from 'vitest';
import fileMaxSize from './fileMaxSize';

describe('Rule "fileMaxSize"', () => {
  const validate = fileMaxSize({ max: 10 });

  test('should pass with valid input', () => {
    expect(validate(createTestFile(10))).toBe(true);
    expect(validate([createTestFile(10)])).toBe(true);
    expect(validate([createTestFile(10), createTestFile(9)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(createTestFile(11))).toBe(false);
    expect(validate([createTestFile(11)])).toBe(false);
    expect(validate([createTestFile(11), createTestFile(10)])).toBe(false);
  });
});
