import { Rule } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';

const alphaNum: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9]+$/.test(String(input));
};

export default alphaNum;
