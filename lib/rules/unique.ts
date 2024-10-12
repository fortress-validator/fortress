import { isEmpty } from '@memochou1993/fortress-utils';
import { RuleArguments } from '~/types';

export interface UniqueRuleArguments extends RuleArguments {
  values: unknown[];
  ignored?: unknown[] | unknown;
}

const unique = ({ values, ignored = [] }: UniqueRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if ((Array.isArray(ignored) ? ignored : [ignored]).some((value) => value === input)) return true;
  return !values.some((value) => value === input);
};

export default unique;
