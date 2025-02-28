import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const distinctRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return new Set(input).size === input.length;
  }
  return true;
};

export default distinctRule;
