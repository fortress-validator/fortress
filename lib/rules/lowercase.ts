import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const lowercase: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toLowerCase();
};

export default lowercase;
