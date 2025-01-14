import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import maxLengthRule from './maxLength';
import minLengthRule from './minLength';

export interface BetweenLengthRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const betweenLength: Rule<BetweenLengthRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return minLengthRule({ length: min })(input) && maxLengthRule({ length: max })(input);
};

export default betweenLength;
