import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const urlRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^(https?):\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}.*$/.test(String(input));
};

export default urlRule;
