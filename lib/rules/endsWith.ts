import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface EndsWithRuleArguments extends RuleArguments {
  value: string;
}

const endsWithRule: Rule<EndsWithRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return String(input).endsWith(value);
};

export default endsWithRule;
