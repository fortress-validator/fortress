import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const email: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(input));
};

export default email;
