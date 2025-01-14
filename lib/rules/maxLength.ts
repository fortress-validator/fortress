import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface MaxLengthRuleArguments extends RuleArguments {
  length: number;
}

const maxLength: Rule<MaxLengthRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.length <= length;
  }
  return false;
};

export default maxLength;
