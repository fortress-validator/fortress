import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface LtRuleArguments extends RuleArguments {
  value: number;
}

const ltRule: Rule<LtRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input < value;
  }
  if (Array.isArray(input)) {
    return input.every(item => ltRule({ value })(item));
  }
  return false;
};

export default ltRule;
