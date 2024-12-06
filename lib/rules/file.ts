import { Rule } from '@fortress-validator/types';

const file: Rule = () => (input: unknown) => {
  return input instanceof File;
};

export default file;
