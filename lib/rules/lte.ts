import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface LteRuleArguments extends RuleArguments {
  value: number;
}

const lteRule: Rule<LteRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input <= value;
  }
  if (Array.isArray(input)) {
    return input.every(item => lteRule({ value })(item));
  }
  return false;
};

export default lteRule;
