import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ContainsAllRuleArguments extends RuleArguments {
  values: unknown[];
}

const containsAllRule: Rule<ContainsAllRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return values.every(value => input.includes(value));
  }
  return false;
};

export default containsAllRule;
