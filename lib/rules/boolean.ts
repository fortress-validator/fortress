import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const boolean: Rule = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  return typeof input === 'boolean';
};

export default boolean;
