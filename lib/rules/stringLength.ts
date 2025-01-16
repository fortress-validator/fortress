import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringLengthRuleArguments extends RuleArguments {
  length: number;
}

const stringLengthRule: Rule<StringLengthRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length === length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringLengthRule({ length })(item));
  }
  return false;
};

export default stringLengthRule;
