import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface GteRuleArguments extends RuleArguments {
  value: number;
}

const gteRule: Rule<GteRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input >= value;
  }
  if (Array.isArray(input)) {
    return input.every(item => gteRule({ value })(item));
  }
  return false;
};

export default gteRule;
