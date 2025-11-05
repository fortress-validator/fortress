import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ContainsRuleArguments extends RuleArguments {
  value: unknown;
}

const containsRule: Rule<ContainsRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.includes(value);
  }
  return false;
};

export default containsRule;
