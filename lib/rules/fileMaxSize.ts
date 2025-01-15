import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileMaxSizeRuleArguments extends RuleArguments {
  size: number;
}

const fileMaxSizeRule: Rule<FileMaxSizeRuleArguments> = ({ size }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return input.size <= size * 1024;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileMaxSizeRule({ size })(file));
  }
  return false;
};

export default fileMaxSizeRule;
