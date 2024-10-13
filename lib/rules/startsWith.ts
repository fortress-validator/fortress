import { Rule, RuleArguments } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';

export interface StartsWitchRuleArguments extends RuleArguments {
  values: string[] | string;
}

const startsWith = ({ values }: StartsWitchRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!Array.isArray(values)) values = [values];
  return values.some((value) => String(input).startsWith(value));
};

export default startsWith as Rule;
