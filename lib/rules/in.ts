import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface InRuleArguments extends RuleArguments {
  values: unknown[];
}

const inRule: Rule<InRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) return input.every(item => values.includes(item));
  return values.includes(input);
};

export default inRule;
