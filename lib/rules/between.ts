import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import gteRule from './gte';
import lteRule from './lte';

export interface BetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const betweenRule: Rule<BetweenRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return gteRule({ value: min })(input) && lteRule({ value: max })(input);
};

export default betweenRule;
