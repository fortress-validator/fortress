import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface OneOfRuleArguments extends RuleArguments {
  values: unknown[];
}

const oneOfRule: Rule<OneOfRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return values.includes(input);
};

export default oneOfRule;
