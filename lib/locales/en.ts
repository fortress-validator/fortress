import type { Messages } from '@fortress-validator/types';
import { formatNumber } from '@fortress-validator/utils';
import type { BetweenRuleArguments } from '~/rules/between';
import type { BetweenLengthRuleArguments } from '~/rules/betweenLength';
import type { ContainsAllRuleArguments } from '~/rules/containsAll';
import type { ContainsAnyRuleArguments } from '~/rules/containsAny';
import type { DifferentRuleArguments } from '~/rules/different';
import type { EndsWithRuleArguments } from '~/rules/endsWith';
import type { EqualsRuleArguments } from '~/rules/equals';
import type { FileBetweenSizeRuleArguments } from '~/rules/fileBetweenSize';
import type { FileMaxSizeRuleArguments } from '~/rules/fileMaxSize';
import type { FileMinSizeRuleArguments } from '~/rules/fileMinSize';
import type { FileSizeRuleArguments } from '~/rules/fileSize';
import type { LengthRuleArguments } from '~/rules/length';
import type { MaxRuleArguments } from '~/rules/max';
import type { MaxLengthRuleArguments } from '~/rules/maxLength';
import type { MinRuleArguments } from '~/rules/min';
import type { MinLengthRuleArguments } from '~/rules/minLength';
import type { NotContainsAllRuleArguments } from '~/rules/notContainsAll';
import type { NotContainsAnyRuleArguments } from '~/rules/notContainsAny';
import type { NotEqualsRuleArguments } from '~/rules/notEquals';
import type { NotOneOfRuleArguments } from '~/rules/notOneOf';
import type { OneOfRuleArguments } from '~/rules/oneOf';
import type { SameRuleArguments } from '~/rules/same';
import type { SizeRuleArguments } from '~/rules/size';
import type { StartsWitchRuleArguments } from '~/rules/startsWith';
import type { StringBetweenLengthRuleArguments } from '~/rules/stringBetweenLength';
import type { StringContainsAllRuleArguments } from '~/rules/stringContainsAll';
import type { StringContainsAnyRuleArguments } from '~/rules/stringContainsAny';
import type { StringLengthRuleArguments } from '~/rules/stringLength';
import type { StringMaxLengthRuleArguments } from '~/rules/stringMaxLength';
import type { StringMinLengthRuleArguments } from '~/rules/stringMinLength';
import type { StringNotContainsAllRuleArguments } from '~/rules/stringNotContainsAll';
import type { StringNotContainsAnyRuleArguments } from '~/rules/stringNotContainsAny';

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
    return `The ${field} field must contain all of the following values: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  containsAny: (field, args) => {
    const { values } = args as ContainsAnyRuleArguments;
    return `The ${field} field must contain at least one of the following values: ${values.map(v => `"${v}"`).join(', ')}.`;
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
    const { value } = args as EndsWithRuleArguments;
    return `The ${field} field must end with ${value}.`;
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
  notContainsAll: (field, args) => {
    const { values } = args as NotContainsAllRuleArguments;
    return `The ${field} field must not contain all of the following values together: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  notContainsAny: (field, args) => {
    const { values } = args as NotContainsAnyRuleArguments;
    return `The ${field} field must not contain any of the following values: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  notEquals: (field, args) => {
    const { value } = args as NotEqualsRuleArguments;
    return `The ${field} field must not be equal to ${value}.`;
  },
  notOneOf: (field, args) => {
    const { values } = args as NotOneOfRuleArguments;
    return `The ${field} field must not be one of the following values: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  number: field => `The ${field} field must be a number.`,
  numeric: field => `The ${field} field must be a number.`,
  oneOf: (field, args) => {
    const { values } = args as OneOfRuleArguments;
    return `The ${field} field must be one of the following values: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
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
    const { value } = args as StartsWitchRuleArguments;
    return `The ${field} field must start with ${value}.`;
  },
  string: field => `The ${field} field must be a string.`,
  stringBetweenLength: (field, args) => {
    const { min, max } = args as StringBetweenLengthRuleArguments;
    return {
      string: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
    };
  },
  stringContainsAll: (field, args) => {
    const { values } = args as StringContainsAllRuleArguments;
    return `The ${field} field must contain all of the following text: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  stringContainsAny: (field, args) => {
    const { values } = args as StringContainsAnyRuleArguments;
    return `The ${field} field must contain at least one of the following text: ${values.map(v => `"${v}"`).join(', ')}.`;
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
  stringNotContainsAll: (field, args) => {
    const { values } = args as StringNotContainsAllRuleArguments;
    return `The ${field} field must not contain all of the following text together: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  stringNotContainsAny: (field, args) => {
    const { values } = args as StringNotContainsAnyRuleArguments;
    return `The ${field} field must not contain any of the following text: ${values.map(v => `"${v}"`).join(', ')}.`;
  },
  unique: field => `The ${field} field has already been taken.`,
  uppercase: field => `The ${field} field must be uppercase.`,
  url: field => `The ${field} field must be a valid URL.`,
};

export default en;
