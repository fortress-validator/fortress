import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import notOneOfRule from './notOneOf';

export interface NotSubsetOfRuleArguments extends RuleArguments {
  values: unknown[];
}

const notSubsetOf: Rule<NotSubsetOfRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.some(item => !values.includes(item));
  }
  return notOneOfRule({ values })(input);
};

export default notSubsetOf;
