import { RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

export interface SizeRuleArguments extends RuleArguments {
  size: number;
}

const size = ({ size }: SizeRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input === size;
  }
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length === size;
  }
  if (input instanceof File) {
    return input.size === size * 1024;
  }
  return false;
};

export default size;
