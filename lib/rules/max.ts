import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface MaxRuleArguments extends RuleArguments {
  max: number;
}

const max: Rule<MaxRuleArguments> = ({ max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input <= max;
  }
  if (typeof input === 'string') {
    return input.length <= max;
  }
  return false;
};

export default max;
