import type { Rule } from '@fortress-validator/types';

const fileRule: Rule = () => (input: unknown) => {
  return input instanceof File;
};

export default fileRule;
