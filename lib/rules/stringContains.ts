import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringContainsRuleArguments extends RuleArguments {
  value: string;
}

const stringContainsRule: Rule<StringContainsRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.includes(value);
  }
  return false;
};

export default stringContainsRule;
