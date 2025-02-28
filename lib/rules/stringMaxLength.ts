import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringMaxLengthRuleArguments extends RuleArguments {
  length: number;
}

const stringMaxLengthRule: Rule<StringMaxLengthRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length <= length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringMaxLengthRule({ length })(item));
  }
  return false;
};

export default stringMaxLengthRule;
