import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import startsWithRule from './startsWith';

export interface ProtocolRuleArguments extends RuleArguments {
  values: string[];
}

const protocolRule: Rule<ProtocolRuleArguments> = ({ values }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return values.map(value => `${value}://`).some(value => startsWithRule({ value })(input));
};

export default protocolRule;
