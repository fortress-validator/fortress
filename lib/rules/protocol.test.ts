import { describe, expect, test } from 'vitest';
import protocol from './protocol';

describe('Rule "protocol"', () => {
  const validate = protocol({ values: ['http', 'https'] });

  test('should pass with valid input', () => {
    expect(validate('http://')).toBe(true);
    expect(validate('https://')).toBe(true);
  });

  test('should fail with invalid input', () => {
    expect(validate(undefined)).toBe(false);
    expect(validate('http:')).toBe(false);
    expect(validate('https:')).toBe(false);
    expect(validate('ftp://')).toBe(false);
  });
});
