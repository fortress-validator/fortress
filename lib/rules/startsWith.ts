import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StartsWitchRuleArguments extends RuleArguments {
  values: string[] | string;
}

const startsWith: Rule<StartsWitchRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!Array.isArray(values)) values = [values];
  return values.some(value => String(input).startsWith(value));
};

export default startsWith;
