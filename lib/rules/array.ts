import { Rule } from '@fortress-validator/types';

const arrayRule: Rule = () => (input: unknown) => {
  return Array.isArray(input);
};

export default arrayRule;
