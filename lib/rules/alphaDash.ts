import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const alphaDash: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9-_]+$/.test(String(input));
};

export default alphaDash;
