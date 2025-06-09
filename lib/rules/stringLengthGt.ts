import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringLengthGtRuleArguments extends RuleArguments {
  length: number;
}

const stringLengthGtRule: Rule<StringLengthGtRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length > length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringLengthGtRule({ length })(item));
  }
  return false;
};

export default stringLengthGtRule;
