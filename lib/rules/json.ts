import { isEmpty } from '@memochou1993/fortress-utils';

const json = () => (input: unknown) => {
  if (isEmpty(input)) return false;
  try {
    JSON.parse(String(input));
    return true;
  } catch {
    return false;
  }
};

export default json;
