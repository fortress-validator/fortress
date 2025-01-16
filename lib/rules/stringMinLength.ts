import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringMinLengthRuleArguments extends RuleArguments {
  length: number;
}

const stringMinLengthRule: Rule<StringMinLengthRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length >= length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringMinLengthRule({ length })(item));
  }
  return false;
};

export default stringMinLengthRule;
