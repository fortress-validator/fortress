import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import arrayLengthGteRule from './arrayLengthGte';
import arrayLengthLteRule from './arrayLengthLte';

export interface ArrayLengthBetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const arrayLengthBetweenRule: Rule<ArrayLengthBetweenRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return arrayLengthGteRule({ length: min })(input) && arrayLengthLteRule({ length: max })(input);
};

export default arrayLengthBetweenRule;
