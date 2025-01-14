import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface MinRuleArguments extends RuleArguments {
  min: number;
}

const min: Rule<MinRuleArguments> = ({ min }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input >= min;
  }
  if (typeof input === 'string') {
    return input.length >= min;
  }
  return false;
};

export default min;
