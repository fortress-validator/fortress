import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const number: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return typeof input === 'number';
};

export default number;
