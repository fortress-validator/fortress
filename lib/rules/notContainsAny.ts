import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface NotContainsAnyRuleArguments extends RuleArguments {
  values: unknown[];
}

const notContainsAnyRule: Rule<NotContainsAnyRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return !values.some(value => input.includes(value));
  }
  return false;
};

export default notContainsAnyRule;
