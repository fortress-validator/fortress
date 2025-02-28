import type { Rule, RuleArguments } from '@fortress-validator/types';

export interface NotEqualsRuleArguments extends RuleArguments {
  value: unknown;
}

const notEquals: Rule<NotEqualsRuleArguments> = ({ value }) => (input: unknown) => {
  return input !== value;
};

export default notEquals;
