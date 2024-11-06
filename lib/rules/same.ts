import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface SameRuleArguments extends RuleArguments {
  field: string;
  value: unknown;
}

const same: Rule<SameRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return input === value;
};

export default same;
