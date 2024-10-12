import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const alphaNum: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9]+$/.test(String(input));
};

export default alphaNum;
