import { RuleArguments } from '@memochou1993/fortress-types';
import { isEmpty } from '@memochou1993/fortress-utils';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

export interface DateRuleArguments extends RuleArguments {
  format?: string;
  strict?: boolean;
}

const date = ({ format, strict }: DateRuleArguments = {}) => (input: unknown) => {
  if (isEmpty(input)) return false;
  return dayjs(String(input), format, strict).isValid();
};

export default date;
