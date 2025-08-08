import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import startsWithNumberRule from './startsWithNumber';

const notStartsWithNumberRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return !startsWithNumberRule()(input);
};

export default notStartsWithNumberRule;
