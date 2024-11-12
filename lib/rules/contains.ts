import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ContainsRuleArguments extends RuleArguments {
  values: unknown[];
}

const contains: Rule<ContainsRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return values.some(value => value === input);
};

export default contains;
