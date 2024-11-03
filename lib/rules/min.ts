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
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length >= min;
  }
  if (input instanceof File) {
    return input.size >= min * 1024;
  }
  return false;
};

export default min;
