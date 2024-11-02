import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const string: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return typeof input === 'string';
};

export default string;
