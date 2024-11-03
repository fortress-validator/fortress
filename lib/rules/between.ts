import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import maxRule from './max';
import minRule from './min';

export interface BetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const between: Rule<BetweenRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return minRule({ min })(input) && maxRule({ max })(input);
};

export default between;
