import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const startsWithNumberRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^\d/.test(String(input));
};

export default startsWithNumberRule;
