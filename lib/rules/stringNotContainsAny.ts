import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringNotContainsAnyRuleArguments extends RuleArguments {
  values: string[];
}

const stringContainsAnyRule: Rule<StringNotContainsAnyRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return !values.some(value => (input).includes(value));
  }
  return false;
};

export default stringContainsAnyRule;
