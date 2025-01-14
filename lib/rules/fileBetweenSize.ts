import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import fileMaxSizeRule from './fileMaxSize';
import fileMinSizeRule from './fileMinSize';

export interface FileBetweenSizeRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const fileBetweenSize: Rule<FileBetweenSizeRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (input instanceof File) {
    return fileMinSizeRule({ size: min })(input) && fileMaxSizeRule({ size: max })(input);
  }
  if (Array.isArray(input)) {
    return input.every(file => fileBetweenSize({ min, max })(file));
  }
  return false;
};

export default fileBetweenSize;
