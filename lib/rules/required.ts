import { Rule } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';

const required: Rule = () => (input: unknown) => {
  return !isEmpty(input);
};

export default required;
