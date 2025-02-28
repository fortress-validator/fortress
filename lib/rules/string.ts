import type { Rule } from '@fortress-validator/types';

const stringRule: Rule = () => (input: unknown) => {
  return typeof input === 'string';
};

export default stringRule;
