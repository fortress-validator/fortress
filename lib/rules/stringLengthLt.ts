import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringLengthLtRuleArguments extends RuleArguments {
  length: number;
}

const stringLengthLtRule: Rule<StringLengthLtRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length < length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringLengthLtRule({ length })(item));
  }
  return false;
};

export default stringLengthLtRule;
