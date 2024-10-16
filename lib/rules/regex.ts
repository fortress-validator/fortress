import { RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface RegexRuleArguments extends RuleArguments {
  expression: RegExp;
}

const regex = ({ expression }: RegexRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (expression instanceof RegExp === false) {
    throw new TypeError('The expression provided is not a valid RegExp.');
  }
  return expression.test(String(input));
};

export default regex;
