import { describe, expect, test } from 'vitest';
import size from './size';

describe('Rule "size"', () => {
  const validate = size({ size: 10 });

  test('should pass with valid input', () => {
    expect(validate(10)).toBe(true);
    expect(validate('_'.repeat(10))).toBe(true);
    expect(validate(Array.from('_'.repeat(10)))).toBe(true);
    expect(validate(new File(['_'.repeat(10 * 1024)], ''))).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate(1)).toBe(false);
    expect(validate('_'.repeat(1))).toBe(false);
    expect(validate(Array.from('_'.repeat(1)))).toBe(false);
    expect(validate(new File(['_'.repeat(1 * 1024)], ''))).toBe(false);
  });
});
