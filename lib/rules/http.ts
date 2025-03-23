import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import protocolRule from './protocol';

const httpRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return protocolRule({ values: ['http'] })(input);
};

export default httpRule;
