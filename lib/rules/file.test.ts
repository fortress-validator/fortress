import { createTestFile } from '@fortress-validator/utils';
import { describe, expect, test } from 'vitest';
import file from './file';

describe('Rule "file"', () => {
  const validate = file();

  test('should pass with valid input', () => {
    expect(validate(createTestFile(0))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('')).toBe(false);
    expect(validate(1)).toBe(false);
    expect(validate(0)).toBe(false);
    expect(validate(true)).toBe(false);
    expect(validate(false)).toBe(false);
    expect(validate([])).toBe(false);
    expect(validate({})).toBe(false);
  });
});
