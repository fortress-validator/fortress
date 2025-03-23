import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import ipv4Rule from './ipv4';
import ipv6Rule from './ipv6';

export interface IpRuleArguments extends RuleArguments {
  includeProtocol?: boolean;
}

const ipRule: Rule<IpRuleArguments> = ({ includeProtocol } = {}) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return ipv4Rule({ includeProtocol })(input) || ipv6Rule({ includeProtocol })(input);
};

export default ipRule;
