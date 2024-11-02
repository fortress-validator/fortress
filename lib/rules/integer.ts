import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import number from './number';

const integer: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return number()(input) && Number.isInteger(input);
};

export default integer;
