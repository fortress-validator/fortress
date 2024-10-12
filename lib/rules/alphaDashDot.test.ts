import { describe, expect, test } from 'vitest';
import alphaDashDot from './alphaDashDot';

describe('Rule "alphaDashDot"', () => {
  const validate = alphaDashDot();

  test('should pass with valid input', () => {
    expect(validate('foo')).toBe(true);
    expect(validate('0')).toBe(true);
    expect(validate('-')).toBe(true);
    expect(validate('.')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('@')).toBe(false);
  });
});
