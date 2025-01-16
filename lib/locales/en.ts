import { Messages } from '@fortress-validator/types';
import { formatNumber } from '@fortress-validator/utils';
import { BetweenRuleArguments } from '~/rules/between';
import { BetweenLengthRuleArguments } from '~/rules/betweenLength';
import { ContainsAllRuleArguments } from '~/rules/containsAll';
import { ContainsAnyRuleArguments } from '~/rules/containsAny';
import { DifferentRuleArguments } from '~/rules/different';
import { EndsWithRuleArguments } from '~/rules/endsWith';
import { EqualsRuleArguments } from '~/rules/equals';
import { FileBetweenSizeRuleArguments } from '~/rules/fileBetweenSize';
import { FileMaxSizeRuleArguments } from '~/rules/fileMaxSize';
import { FileMinSizeRuleArguments } from '~/rules/fileMinSize';
import { FileSizeRuleArguments } from '~/rules/fileSize';
import { InRuleArguments } from '~/rules/in';
import { LengthRuleArguments } from '~/rules/length';
import { MaxRuleArguments } from '~/rules/max';
import { MaxLengthRuleArguments } from '~/rules/maxLength';
import { MinRuleArguments } from '~/rules/min';
import { MinLengthRuleArguments } from '~/rules/minLength';
import { NotInRuleArguments } from '~/rules/notIn';
import { SameRuleArguments } from '~/rules/same';
import { SizeRuleArguments } from '~/rules/size';
import { StartsWitchRuleArguments } from '~/rules/startsWith';
import { StringBetweenLengthRuleArguments } from '~/rules/stringBetweenLength';
import { StringLengthRuleArguments } from '~/rules/stringLength';
import { StringMaxLengthRuleArguments } from '~/rules/stringMaxLength';
import { StringMinLengthRuleArguments } from '~/rules/stringMinLength';

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
      number: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)}.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)}.`,
    };
  },
  betweenLength: (field, args) => {
    const { min, max } = args as BetweenLengthRuleArguments;
    return `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} items.`;
  },
  boolean: field => `The ${field} field must be a boolean value.`,
  containsAll: (field, args) => {
    const { values } = args as ContainsAllRuleArguments;
    return `The ${field} field must contain all of the following: ${values.join(', ')}.`;
  },
  containsAny: (field, args) => {
    const { values } = args as ContainsAnyRuleArguments;
    return `The ${field} field must contain at least one of the following: ${values.join(', ')}.`;
  },
  declined: field => `The ${field} field must be declined.`,
  different: (field, args) => {
    const { field: other } = args as DifferentRuleArguments;
    return `The ${field} and ${other} fields must be different.`;
  },
  distinct: field => `The ${field} field must not contain duplicate values.`,
  domain: field => `The ${field} field must be a valid domain.`,
  email: field => `The ${field} field must be a valid email address.`,
  endsWith: (field, args) => {
    const { values } = args as EndsWithRuleArguments;
    return typeof values === 'string'
      ? `The ${field} field must end with ${values}.`
      : `The ${field} field must end with one of the following: ${values.join(', ')}.`;
  },
  equals: (field, args) => {
    const { value } = args as EqualsRuleArguments;
    return `The ${field} field must be equal to ${value}.`;
  },
  file: field => `The ${field} field must be a file.`,
  fileBetweenSize: (field, args) => {
    const { min, max } = args as FileBetweenSizeRuleArguments;
    return {
      file: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} kilobytes.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)} kilobytes.`,
    };
  },
  fileMaxSize: (field, args) => {
    const { size } = args as FileMaxSizeRuleArguments;
    return {
      file: `The ${field} field must not be greater than ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is not greater than ${formatNumber(size)} kilobytes.`,
    };
  },
  fileMinSize: (field, args) => {
    const { size } = args as FileMinSizeRuleArguments;
    return {
      file: `The ${field} field must be at least ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is at least ${formatNumber(size)} kilobytes.`,
    };
  },
  fileSize: (field, args) => {
    const { size } = args as FileSizeRuleArguments;
    return {
      file: `The ${field} field must be ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is ${formatNumber(size)} kilobytes.`,
    };
  },
  http: field => `The ${field} field must start with either "http://" or "https://".`,
  https: field => `The ${field} field must start with "http://".`,
  in: (field, args) => {
    const { values } = args as InRuleArguments;
    return `The ${field} field must be one of the following: ${values.join(', ')}.`;
  },
  integer: field => `The ${field} field must be an integer.`,
  json: field => `The ${field} field must be a valid JSON string.`,
  length: (field, args) => {
    const { length } = args as LengthRuleArguments;
    return `The ${field} field must be ${formatNumber(length)} items.`;
  },
  lowercase: field => `The ${field} field must be lowercase.`,
  max: (field, args) => {
    const { max } = args as MaxRuleArguments;
    return {
      number: `The ${field} field must not be greater than ${formatNumber(max)}.`,
      array: `The ${field} field must contain items where each item is not greater than ${formatNumber(max)}.`,
    };
  },
  maxLength: (field, args) => {
    const { length } = args as MaxLengthRuleArguments;
    return `The ${field} field must not be greater than ${formatNumber(length)} items.`;
  },
  min: (field, args) => {
    const { min } = args as MinRuleArguments;
    return {
      number: `The ${field} field must be at least ${formatNumber(min)}.`,
      array: `The ${field} field must contain items where each item is at least ${formatNumber(min)}.`,
    };
  },
  minLength: (field, args) => {
    const { length } = args as MinLengthRuleArguments;
    return `The ${field} field must be at least ${formatNumber(length)} items.`;
  },
  notEquals: (field, args) => {
    const { value } = args as EqualsRuleArguments;
    return `The ${field} field must not be equal to ${value}.`;
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
      number: `The ${field} field must be ${formatNumber(size)}.`,
      array: `The ${field} field must contain items where each item is ${formatNumber(size)}.`,
    };
  },
  startsWith: (field, args) => {
    const { values } = args as StartsWitchRuleArguments;
    return typeof values === 'string'
      ? `The ${field} field must start with ${values}.`
      : `The ${field} field must start with one of the following: ${values.join(', ')}.`;
  },
  string: field => `The ${field} field must be a string.`,
  stringBetweenLength: (field, args) => {
    const { min, max } = args as StringBetweenLengthRuleArguments;
    return {
      string: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
    };
  },
  stringLength: (field, args) => {
    const { length } = args as StringLengthRuleArguments;
    return {
      string: `The ${field} field must be ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is ${formatNumber(length)} characters.`,
    };
  },
  stringMaxLength: (field, args) => {
    const { length } = args as StringMaxLengthRuleArguments;
    return {
      string: `The ${field} field must not be greater than ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is not greater than ${formatNumber(length)} characters.`,
    };
  },
  stringMinLength: (field, args) => {
    const { length } = args as StringMinLengthRuleArguments;
    return {
      string: `The ${field} field must be at least ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is at least ${formatNumber(length)} characters.`,
    };
  },
  unique: field => `The ${field} field has already been taken.`,
  uppercase: field => `The ${field} field must be uppercase.`,
  url: field => `The ${field} field must be a valid URL.`,
};

export default en;
