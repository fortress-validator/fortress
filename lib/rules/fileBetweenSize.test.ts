import { createTestFile } from '@fortress-validator/utils';
import { describe, expect, test } from 'vitest';
import fileBetweenSize from './fileBetweenSize';

describe('Rule "fileBetweenSize"', () => {
  const validate = fileBetweenSize({ min: 10, max: 20 });

  test('should pass with valid input', () => {
    expect(validate(createTestFile(15))).toBe(true);
    expect(validate([createTestFile(15)])).toBe(true);
    expect(validate([createTestFile(15), createTestFile(15)])).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(createTestFile(9))).toBe(false);
    expect(validate(createTestFile(21))).toBe(false);
    expect(validate([createTestFile(9)])).toBe(false);
    expect(validate([createTestFile(9), createTestFile(15)])).toBe(false);
    expect(validate([createTestFile(21)])).toBe(false);
    expect(validate([createTestFile(21), createTestFile(15)])).toBe(false);
  });
});
