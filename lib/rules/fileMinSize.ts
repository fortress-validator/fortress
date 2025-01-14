import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileMinSizeRuleArguments extends RuleArguments {
  size: number;
}

const fileMinSize: Rule<FileMinSizeRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return input.size >= size * 1024;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileMinSize({ size })(file));
  }
  return false;
};

export default fileMinSize;
