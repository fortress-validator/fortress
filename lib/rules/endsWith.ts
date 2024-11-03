import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface EndsWithRuleArguments extends RuleArguments {
  values: string[] | string;
}

const endsWith: Rule<EndsWithRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!Array.isArray(values)) values = [values];
  return values.some(value => String(input).endsWith(value));
};

export default endsWith;
