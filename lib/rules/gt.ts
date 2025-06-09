import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface GtRuleArguments extends RuleArguments {
  value: number;
}

const gtRule: Rule<GtRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input > value;
  }
  if (Array.isArray(input)) {
    return input.every(item => gtRule({ value })(item));
  }
  return false;
};

export default gtRule;
