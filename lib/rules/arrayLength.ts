import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ArrayLengthRuleArguments extends RuleArguments {
  length: number;
}

const arrayLengthRule: Rule<ArrayLengthRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.length === length;
  }
  return false;
};

export default arrayLengthRule;
