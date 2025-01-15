import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface SizeRuleArguments extends RuleArguments {
  size: number;
}

const sizeRule: Rule<SizeRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input === size;
  }
  if (typeof input === 'string') {
    return input.length === size;
  }
  if (Array.isArray(input)) {
    return input.every(item => sizeRule({ size })(item));
  }
  return false;
};

export default sizeRule;
