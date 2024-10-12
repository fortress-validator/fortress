import { isEmpty } from '@memochou1993/fortress-utils';
import { RuleArguments } from '~/types';

export interface NotInRuleArguments extends RuleArguments {
  values: unknown[];
}

const notIn = ({ values }: NotInRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !values.some((value) => value === input);
};

export default notIn;
