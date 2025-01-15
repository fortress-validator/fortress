import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const numberRule: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return typeof input === 'number';
};

export default numberRule;
