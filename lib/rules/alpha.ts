import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const alpha: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z]+$/.test(String(input));
};

export default alpha;
