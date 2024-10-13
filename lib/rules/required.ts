import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const required: Rule = () => (input: unknown) => {
  return !isEmpty(input);
};

export default required;
