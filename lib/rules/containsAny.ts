import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ContainsAnyRuleArguments extends RuleArguments {
  values: unknown[];
}

const containsAnyRule: Rule<ContainsAnyRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return values.some(value => input.includes(value));
  }
  return false;
};

export default containsAnyRule;
