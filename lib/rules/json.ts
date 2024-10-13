import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const json: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  try {
    JSON.parse(String(input));
    return true;
  } catch {
    return false;
  }
};

export default json;
