import type { Rule } from '@fortress-validator/types';

const object: Rule = () => (input: unknown) => {
  return typeof input === 'object' && input !== null && !Array.isArray(input);
};

export default object;
