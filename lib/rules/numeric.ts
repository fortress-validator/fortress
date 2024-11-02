import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import number from './number';
import string from './string';

const numeric: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (string()(input)) {
    return /^-?\d+(\.\d+)?$/.test(String(input));
  }
  return number()(input);
};

export default numeric;
