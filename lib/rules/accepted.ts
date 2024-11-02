import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const accepted: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return ['y', 'yes', 'on', '1', 'true'].includes(String(input).toLowerCase());
};

export default accepted;
