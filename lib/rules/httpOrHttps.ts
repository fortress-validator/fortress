import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
import httpRule from './http';
import httpsRule from './https';

const httpOrHttpsRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return httpRule()(input) || httpsRule()(input);
};

export default httpOrHttpsRule;
