import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const alpha: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z]+$/.test(String(input));
};

export default alpha;
