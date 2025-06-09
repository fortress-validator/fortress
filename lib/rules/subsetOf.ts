import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import oneOfRule from './oneOf';

export interface SubsetOfRuleArguments extends RuleArguments {
  values: unknown[];
}

const subsetOfRule: Rule<SubsetOfRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.every(item => values.includes(item));
  }
  return oneOfRule({ values })(input);
};

export default subsetOfRule;
