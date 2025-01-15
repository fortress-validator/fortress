import { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import fileMaxSizeRule from './fileMaxSize';
import fileMinSizeRule from './fileMinSize';

export interface FileBetweenSizeRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const fileBetweenSizeRule: Rule<FileBetweenSizeRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return fileMinSizeRule({ size: min })(input) && fileMaxSizeRule({ size: max })(input);
};

export default fileBetweenSizeRule;
