import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ArrayLengthGtRuleArguments extends RuleArguments {
  length: number;
}

const arrayLengthGtRule: Rule<ArrayLengthGtRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.length > length;
  }
  return false;
};

export default arrayLengthGtRule;
