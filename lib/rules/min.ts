import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface MinRuleArguments extends RuleArguments {
  min: number;
}

const minRule: Rule<MinRuleArguments> = ({ min }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input >= min;
  }
  if (Array.isArray(input)) {
    return input.every(item => minRule({ min })(item));
  }
  return false;
};

export default minRule;
