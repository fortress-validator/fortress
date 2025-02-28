import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const alphaDashDotRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z0-9-_.]+$/.test(String(input));
};

export default alphaDashDotRule;
