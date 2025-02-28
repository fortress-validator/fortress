import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const asciiRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[\x20-\x7E]+$/.test(String(input));
};

export default asciiRule;
