import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface NotOneOfRuleArguments extends RuleArguments {
  values: unknown[];
}

const notOneOfRule: Rule<NotOneOfRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !values.includes(input);
};

export default notOneOfRule;
