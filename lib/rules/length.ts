import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface LengthRuleArguments extends RuleArguments {
  length: number;
}

const lengthRule: Rule<LengthRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.length === length;
  }
  return false;
};

export default lengthRule;
