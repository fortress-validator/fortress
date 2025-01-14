import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface SizeRuleArguments extends RuleArguments {
  size: number;
}

const size: Rule<SizeRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input === size;
  }
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length === size;
  }
  return false;
};

export default size;
