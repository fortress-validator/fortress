import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const alphaNum: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9]+$/.test(String(input));
};

export default alphaNum;
