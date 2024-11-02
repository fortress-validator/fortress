import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const declined: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return ['n', 'no', 'off', '0', 'false'].includes(String(input).toLowerCase());
};

export default declined;
