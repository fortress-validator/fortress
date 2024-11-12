import { Rule } from '@fortress-validator/types';

const array: Rule = () => (input: unknown) => {
  return Array.isArray(input);
};

export default array;
