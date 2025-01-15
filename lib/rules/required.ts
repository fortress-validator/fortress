import { Rule } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';

const requiredRule: Rule = () => (input: unknown) => {
  return !isEmpty(input);
};

export default requiredRule;
