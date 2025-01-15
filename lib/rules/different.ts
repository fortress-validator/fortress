import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface DifferentRuleArguments extends RuleArguments {
  field: string;
  value: unknown;
}

const differentRule: Rule<DifferentRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return input !== value;
};

export default differentRule;
