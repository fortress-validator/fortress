import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const booleanRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return typeof input === 'boolean';
};

export default booleanRule;
