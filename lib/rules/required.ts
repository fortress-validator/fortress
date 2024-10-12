import { isEmpty } from '@memochou1993/fortress-utils';
import { Rule } from '~/types';

const required: Rule = () => (input: unknown) => {
  return !isEmpty(input);
};

export default required;
