import { Rule } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';

const email: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(input));
};

export default email;
