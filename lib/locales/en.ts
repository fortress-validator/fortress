import { Messages } from '@fortress-validator/types';
import { formatNumber } from '@fortress-validator/utils';
import { BetweenRuleArguments } from '~/rules/between';
import { ContainsRuleArguments } from '~/rules/contains';
import { DifferentRuleArguments } from '~/rules/different';
import { EndsWithRuleArguments } from '~/rules/endsWith';
import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { NotInRuleArguments } from '~/rules/notIn';
import { SameRuleArguments } from '~/rules/same';
import { SizeRuleArguments } from '~/rules/size';
import { StartsWitchRuleArguments } from '~/rules/startsWith';

const en: Messages = {
  accepted: field => `The ${field} field must be accepted.`,
  alpha: field => `The ${field} field must only contain letters.`,
  alphaDash: field => `The ${field} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: field => `The ${field} field must only contain letters, numbers, dashes, underscores and dots.`,
  alphaNum: field => `The ${field} field must only contain letters and numbers.`,
  array: field => `The ${field} field must be an array.`,
  ascii: field => `The ${field} field must only contain ASCII characters and symbols.`,
  between: (field, args) => {
    const { min, max } = args as BetweenRuleArguments;
    return {
      array: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} items.`,
      file: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} kilobytes.`,
      number: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)}.`,
      string: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
    };
  },
  boolean: field => `The ${field} field must be a boolean value.`,
  contains: (field, args) => {
    const { values } = args as ContainsRuleArguments;
    return `The ${field} field must be one of the following: ${values.join(', ')}.`;
  },
  declined: field => `The ${field} field must be declined.`,
  different: (field, args) => {
    const { field: other } = args as DifferentRuleArguments;
    return `The ${field} and ${other} fields must be different.`;
  },
  distinct: field => `The ${field} field must not contain duplicate values.`,
  email: field => `The ${field} field must be a valid email address.`,
  endsWith: (field, args) => {
    const { values } = args as EndsWithRuleArguments;
    return typeof values === 'string'
      ? `The ${field} field must end with ${values}.`
      : `The ${field} field must end with one of the following: ${values.join(', ')}.`;
  },
  integer: field => `The ${field} field must be an integer.`,
  json: field => `The ${field} field must be a valid JSON string.`,
  lowercase: field => `The ${field} field must be lowercase.`,
  max: (field, args) => {
    const { max } = args as MaxRuleArguments;
    return {
      array: `The ${field} field must not be greater than ${formatNumber(max)} items.`,
      file: `The ${field} field must not be greater than ${formatNumber(max)} kilobytes.`,
      number: `The ${field} field must not be greater than ${formatNumber(max)}.`,
      string: `The ${field} field must not be greater than ${formatNumber(max)} characters.`,
    };
  },
  min: (field, args) => {
    const { min } = args as MinRuleArguments;
    return {
      array: `The ${field} field must be at least ${formatNumber(min)} items.`,
      file: `The ${field} field must be at least ${formatNumber(min)} kilobytes.`,
      number: `The ${field} field must be at least ${formatNumber(min)}.`,
      string: `The ${field} field must be at least ${formatNumber(min)} characters.`,
    };
  },
  notIn: (field, args) => {
    const { values } = args as NotInRuleArguments;
    return `The ${field} field must not be one of the following: ${values.join(', ')}.`;
  },
  number: field => `The ${field} field must be a number.`,
  numeric: field => `The ${field} field must be a number.`,
  regex: field => `The ${field} field must match the required format.`,
  required: field => `The ${field} field is required.`,
  same: (field, args) => {
    const { field: other } = args as SameRuleArguments;
    return `The ${field} and ${other} fields must match.`;
  },
  size: (field, args) => {
    const { size } = args as SizeRuleArguments;
    return {
      array: `The ${field} field must contain ${formatNumber(size)} items.`,
      file: `The ${field} field must be ${formatNumber(size)} kilobytes.`,
      number: `The ${field} field must be ${formatNumber(size)}.`,
      string: `The ${field} field must be ${formatNumber(size)} characters.`,
    };
  },
  startsWith: (field, args) => {
    const { values } = args as StartsWitchRuleArguments;
    return typeof values === 'string'
      ? `The ${field} field must start with ${values}.`
      : `The ${field} field must start with one of the following: ${values.join(', ')}.`;
  },
  string: field => `The ${field} field must be a string.`,
  unique: field => `The ${field} field has already been taken.`,
  uppercase: field => `The ${field} field must be uppercase.`,
  url: field => `The ${field} field must be a valid URL.`,
};

export default en;
