import { isEmpty } from '@fortress-validator/utils';

const distinct = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  if (!Array.isArray(input)) return true;
  return new Set(input).size === input.length;
};

export default distinct;
