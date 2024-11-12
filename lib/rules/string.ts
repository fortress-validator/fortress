import { Rule } from '@fortress-validator/types';

const string: Rule = () => (input: unknown) => {
  return typeof input === 'string';
};

export default string;
