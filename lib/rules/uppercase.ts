import { Rule } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';

const uppercase: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toUpperCase();
};

export default uppercase;
