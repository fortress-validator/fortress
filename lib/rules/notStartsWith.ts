import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import startsWithRule from './startsWith';

export interface NotStartsWithRuleArguments extends RuleArguments {
  value: string;
}

const notStartsWithRule: Rule<NotStartsWithRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !startsWithRule({ value })(input);
};

export default notStartsWithRule;
