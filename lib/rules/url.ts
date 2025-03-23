import type { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const urlRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  try {
    new URL(String(input));
    return true;
  } catch (e) {
    return false;
  }
};

export default urlRule;
