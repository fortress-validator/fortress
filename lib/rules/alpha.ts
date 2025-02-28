import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const alphaRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z]+$/.test(String(input));
};

export default alphaRule;
