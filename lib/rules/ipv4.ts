import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface Ipv4RuleArguments extends RuleArguments {
  includeProtocol?: boolean;
}

const ipv4Rule: Rule<Ipv4RuleArguments> = ({ includeProtocol } = {}) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (includeProtocol) {
    try {
      const { host } = new URL(String(input));
      return ipv4Rule({})(host);
    } catch {
      return false;
    }
  }
  return /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(:\d+)?$/.test(String(input));
};

export default ipv4Rule;
