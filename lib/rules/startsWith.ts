import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StartsWithRuleArguments extends RuleArguments {
  value: string;
}

const startsWithRule: Rule<StartsWithRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input).startsWith(value);
};

export default startsWithRule;
