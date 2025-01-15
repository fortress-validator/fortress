import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const jsonRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  try {
    JSON.parse(String(input));
    return true;
  } catch {
    return false;
  }
};

export default jsonRule;
