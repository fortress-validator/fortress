import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface StringLengthGteRuleArguments extends RuleArguments {
  length: number;
}

const stringLengthGteRule: Rule<StringLengthGteRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'string') {
    return input.length >= length;
  }
  if (Array.isArray(input)) {
    return input.every(item => stringLengthGteRule({ length })(item));
  }
  return false;
};

export default stringLengthGteRule;
