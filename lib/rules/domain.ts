import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const domainRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(String(input));
};

export default domainRule;
