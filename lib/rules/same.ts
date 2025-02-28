import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface SameRuleArguments extends RuleArguments {
  field: string;
  value: unknown;
}

const sameRule: Rule<SameRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.every(item => item === value);
  }
  return input === value;
};

export default sameRule;
