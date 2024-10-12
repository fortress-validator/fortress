import { Rule } from '~/types';
import { isEmpty } from '~/utils';

const alpha: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return /^[a-zA-Z]+$/.test(String(input));
};

export default alpha;
