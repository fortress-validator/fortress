import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import numberRule from './number';
import stringRule from './string';

const numericRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (stringRule()(input)) {
    return /^-?\d+(\.\d+)?$/.test(String(input));
  }
  return numberRule()(input);
};

export default numericRule;
