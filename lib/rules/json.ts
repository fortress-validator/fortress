import { Rule } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';

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
