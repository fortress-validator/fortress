import type { Rule, RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import fileSizeGteRule from './fileSizeGte';
import fileSizeLteRule from './fileSizeLte';

export interface FileSizeBetweenRuleArguments extends RuleArguments {
  min: number;
  max: number;
}

const fileSizeBetweenRule: Rule<FileSizeBetweenRuleArguments> = ({ min, max }) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return fileSizeGteRule({ size: min })(input) && fileSizeLteRule({ size: max })(input);
};

export default fileSizeBetweenRule;
