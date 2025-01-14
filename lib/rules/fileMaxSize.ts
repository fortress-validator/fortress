import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface FileMaxSizeRuleArguments extends RuleArguments {
  max: number;
}

const fileMaxSize: Rule<FileMaxSizeRuleArguments> = ({ max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return input.size <= max * 1024;
  }
  if (Array.isArray(input)) {
    return input.every(file => fileMaxSize({ max })(file));
  }
  return false;
};

export default fileMaxSize;
