import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const lowercaseRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toLowerCase();
};

export default lowercaseRule;
