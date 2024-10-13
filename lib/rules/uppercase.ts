import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const uppercase: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input) === String(input).toUpperCase();
};

export default uppercase;
