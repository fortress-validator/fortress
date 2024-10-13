import { RuleArguments } from '@fortress-validator/types';
import { isEmpty } from '@fortress-validator/utils';
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
