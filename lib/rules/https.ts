import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import startsWithRule from './startsWith';

const httpsRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return startsWithRule({ value: 'https://' })(input);
};

export default httpsRule;
