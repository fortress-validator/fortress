import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const uppercase: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toUpperCase();
};

export default uppercase;
