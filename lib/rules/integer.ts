import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import numberRule from './number';

const integer: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return numberRule()(input) && Number.isInteger(input);
};

export default integer;
