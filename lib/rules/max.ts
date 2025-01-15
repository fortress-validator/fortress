import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface MaxRuleArguments extends RuleArguments {
  max: number;
}

const maxRule: Rule<MaxRuleArguments> = ({ max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input <= max;
  }
  if (typeof input === 'string') {
    return input.length <= max;
  }
  if (Array.isArray(input)) {
    return input.every(item => maxRule({ max })(item));
  }
  return false;
};

export default maxRule;
