import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface InRuleArguments extends RuleArguments {
  values: unknown[];
}

const _in = ({ values }: InRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return values.some(value => value === input);
};

export default _in as Rule;
