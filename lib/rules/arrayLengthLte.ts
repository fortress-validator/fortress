import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface ArrayLengthLteRuleArguments extends RuleArguments {
  length: number;
}

const arrayLengthLteRule: Rule<ArrayLengthLteRuleArguments> = ({ length }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (Array.isArray(input)) {
    return input.length <= length;
  }
  return false;
};

export default arrayLengthLteRule;
