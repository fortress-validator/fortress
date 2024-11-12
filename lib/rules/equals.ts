import { Rule, RuleArguments } from '@fortress-validator/types';

export interface EqualsRuleArguments extends RuleArguments {
  value: unknown;
}

const equals: Rule<EqualsRuleArguments> = ({ value }) => (input: unknown) => {
  return input === value;
};

export default equals;
