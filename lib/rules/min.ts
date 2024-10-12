import { isEmpty } from '@memochou1993/fortress-utils';
import { RuleArguments } from '~/types';

export interface MinRuleArguments extends RuleArguments {
  min: number;
}

const min = ({ min }: MinRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input >= min;
  }
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length >= min;
  }
  if (input instanceof File) {
    return input.size >= min * 1024;
  }
  return false;
};

export default min;
