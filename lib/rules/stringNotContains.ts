import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringNotContainsRuleArguments extends RuleArguments {
  value: string;
}

const stringNotContainsRule: Rule<StringNotContainsRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return !input.includes(value);
  }
  return false;
};

export default stringNotContainsRule;
