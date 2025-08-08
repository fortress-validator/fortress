import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import endsWithRule from './endsWith';

export interface NotEndsWithRuleArguments extends RuleArguments {
  value: string;
}

const notEndsWithRule: Rule<NotEndsWithRuleArguments> = ({ value }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !endsWithRule({ value })(input);
};

export default notEndsWithRule;
