import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import startsWithRule from './startsWith';

const httpRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return startsWithRule({ value: 'http://' })(input) || startsWithRule({ value: 'https://' })(input);
};

export default httpRule;
