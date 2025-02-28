import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringContainsAnyRuleArguments extends RuleArguments {
  values: string[];
}

const stringContainsAnyRule: Rule<StringContainsAnyRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return values.some(value => input.includes(value));
  }
  return false;
};

export default stringContainsAnyRule;
