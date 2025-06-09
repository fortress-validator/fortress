import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import stringLengthGteRule from './stringLengthGte';
import stringLengthLteRule from './stringLengthLte';

export interface StringLengthBetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const stringLengthBetweenRule: Rule<StringLengthBetweenRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return stringLengthGteRule({ length: min })(input) && stringLengthLteRule({ length: max })(input);
};

export default stringLengthBetweenRule;
