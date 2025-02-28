import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import stringMaxLengthRule from './stringMaxLength';
import stringMinLengthRule from './stringMinLength';

export interface StringBetweenLengthRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const stringBetweenLengthRule: Rule<StringBetweenLengthRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return stringMinLengthRule({ length: min })(input) && stringMaxLengthRule({ length: max })(input);
};

export default stringBetweenLengthRule;
