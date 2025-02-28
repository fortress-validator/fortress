import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringNotContainsAllRuleArguments extends RuleArguments {
  values: string[];
}

const stringContainsAllRule: Rule<StringNotContainsAllRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return !values.every(value => (input).includes(value));
  }
  return false;
};

export default stringContainsAllRule;
