import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileMinSizeRuleArguments extends RuleArguments {
  min: number;
}

const fileMinSize: Rule<FileMinSizeRuleArguments> = ({ min }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return input.size >= min * 1024;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileMinSize({ min })(file));
  }
  return false;
};

export default fileMinSize;
