import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileSizeLteRuleArguments extends RuleArguments {
  size: number;
}

const fileSizeLteRule: Rule<FileSizeLteRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return input.size <= size * 1024;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileSizeLteRule({ size })(file));
  }
  return false;
};

export default fileSizeLteRule;
