import { BetweenRuleArguments } from '~/rules/between';
import { EndsWithRuleArguments } from '~/rules/endsWith';
import { InRuleArguments } from '~/rules/in';
import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { NotInRuleArguments } from '~/rules/notIn';
import { StartsWitchRuleArguments } from '~/rules/startsWith';
import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const en: Messages = {
  alphaDash: (field) => `The ${field} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: (field) => `The ${field} field must only contain letters, numbers, dashes, underscores and dots.`,
  between: (field, { min, max }: BetweenRuleArguments) => ({
    array: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} items.`,
    file: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} kilobytes.`,
    number: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)}.`,
    string: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
  }),
  email: (field) => `The ${field} field must be a valid email address.`,
  endsWith: (field, { values }: EndsWithRuleArguments) => {
    return typeof values === 'string'
      ? `The ${field} field must end with ${values}.`
      : `The ${field} field must end with one of the following: ${values.join(', ')}.`;
  },
  in: (field, { values }: InRuleArguments) => `The ${field} field must be one of the following: ${values.join(', ')}.`,
  json: (field) => `The ${field} field must be a valid JSON string.`,
  lowercase: (field) => `The ${field} field must be lowercase.`,
  max: (field, { max }: MaxRuleArguments) => ({
    array: `The ${field} field must not be greater than ${formatNumber(max)} items.`,
    file: `The ${field} field must not be greater than ${formatNumber(max)} kilobytes.`,
    number: `The ${field} field must not be greater than ${formatNumber(max)}.`,
    string: `The ${field} field must not be greater than ${formatNumber(max)} characters.`,
  }),
  min: (field, { min }: MinRuleArguments) => ({
    array: `The ${field} field must be at least ${formatNumber(min)} items.`,
    file: `The ${field} field must be at least ${formatNumber(min)} kilobytes.`,
    number: `The ${field} field must be at least ${formatNumber(min)}.`,
    string: `The ${field} field must be at least ${formatNumber(min)} characters.`,
  }),
  notIn: (field, { values }: NotInRuleArguments) => `The ${field} field must not be one of the following: ${values.join(', ')}.`,
  regex: (field) => `The ${field} field must match the required format.`,
  required: (field) => `The ${field} field is required.`,
  startsWith: (field, { values }: StartsWitchRuleArguments) => {
    return typeof values === 'string'
      ? `The ${field} field must start with ${values}.`
      : `The ${field} field must start with one of the following: ${values.join(', ')}.`;
  },
  unique: (field) => `The ${field} field has already been taken.`,
  uppercase: (field) => `The ${field} field must be uppercase.`,
  url: (field) => `The ${field} field must be a valid URL.`,
};

export default en;
