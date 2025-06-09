import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringLengthLteRuleArguments extends RuleArguments {
  length: number;
}

const stringLengthLteRule: Rule<StringLengthLteRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length <= length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringLengthLteRule({ length })(item));
  }
  return false;
};

export default stringLengthLteRule;
