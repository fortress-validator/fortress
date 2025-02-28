import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileSizeRuleArguments extends RuleArguments {
  size: number;
}

const fileSizeRule: Rule<FileSizeRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    const minSize = size * 1024;
    const maxSize = (size + 1) * 1024;
    return input.size >= minSize && input.size < maxSize;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileSizeRule({ size })(file));
  }
  return false;
};

export default fileSizeRule;
