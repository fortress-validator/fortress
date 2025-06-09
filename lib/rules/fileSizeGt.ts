import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileSizeGtRuleArguments extends RuleArguments {
  size: number;
}

const fileSizeGtRule: Rule<FileSizeGtRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return input.size > size * 1024;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileSizeGtRule({ size })(file));
  }
  return false;
};

export default fileSizeGtRule;
