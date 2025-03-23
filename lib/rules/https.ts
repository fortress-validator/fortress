import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import protocolRule from './protocol';

const httpsRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return protocolRule({ values: ['https'] })(input);
};

export default httpsRule;
