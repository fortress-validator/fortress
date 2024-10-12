import { isEmpty } from '@memochou1993/fortress-utils';
import { RuleArguments } from '~/types';

export interface MaxRuleArguments extends RuleArguments {
  max: number;
}

const min = ({ max }: MaxRuleArguments) => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (typeof input === 'number') {
    return input <= max;
  }
  if (typeof input === 'string' || Array.isArray(input)) {
    return input.length <= max;
  }
  if (input instanceof File) {
    return input.size <= max * 1024;
  } 
  return false;
};

export default min;
