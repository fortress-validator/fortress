import { RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import max from './max';
import min from './min';

export interface BetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const between = ({ min: minValue, max: maxValue }: BetweenRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return min({ min: minValue })(input) && max({ max: maxValue })(input);
};

export default between;
