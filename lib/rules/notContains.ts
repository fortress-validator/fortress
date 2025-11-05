import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface NotContainsRuleArguments extends RuleArguments {
  value: unknown;
}

const notContainsRule: Rule<NotContainsRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return !input.includes(value);
  }
  return false;
};

export default notContainsRule;
