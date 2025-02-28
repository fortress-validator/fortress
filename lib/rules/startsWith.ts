import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StartsWitchRuleArguments extends RuleArguments {
  value: string;
}

const startsWithRule: Rule<StartsWitchRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input).startsWith(value);
};

export default startsWithRule;
