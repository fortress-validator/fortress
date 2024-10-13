import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface NotInRuleArguments extends RuleArguments {
  values: unknown[];
}

const notIn = ({ values }: NotInRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !values.some(value => value === input);
};

export default notIn as Rule;
