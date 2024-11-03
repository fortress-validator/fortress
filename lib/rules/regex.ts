import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface RegexRuleArguments extends RuleArguments {
  expression: RegExp;
}

const regex: Rule<RegexRuleArguments> = ({ expression }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (expression instanceof RegExp === false) {
    throw new TypeError('The expression provided is not a valid RegExp.');
  }
  return expression.test(String(input));
};

export default regex;
