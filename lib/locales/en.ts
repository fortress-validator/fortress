import type { Messages } from '@fortress-validator/types';
import { formatNumber, quote } from '@fortress-validator/utils';
import type { ArrayLengthRuleArguments } from '~/rules/arrayLength';
import type { ArrayLengthBetweenRuleArguments } from '~/rules/arrayLengthBetween';
import type { ArrayLengthGtRuleArguments } from '~/rules/arrayLengthGt';
import type { ArrayLengthGteRuleArguments } from '~/rules/arrayLengthGte';
import type { ArrayLengthLtRuleArguments } from '~/rules/arrayLengthLt';
import type { ArrayLengthLteRuleArguments } from '~/rules/arrayLengthLte';
import type { BetweenRuleArguments } from '~/rules/between';
import type { ContainsAllRuleArguments } from '~/rules/containsAll';
import type { ContainsAnyRuleArguments } from '~/rules/containsAny';
import type { DifferentRuleArguments } from '~/rules/different';
import type { EndsWithRuleArguments } from '~/rules/endsWith';
import type { EqualsRuleArguments } from '~/rules/equals';
import type { FileSizeRuleArguments } from '~/rules/fileSize';
import type { FileSizeBetweenRuleArguments } from '~/rules/fileSizeBetween';
import type { FileSizeGtRuleArguments } from '~/rules/fileSizeGt';
import type { FileSizeGteRuleArguments } from '~/rules/fileSizeGte';
import type { FileSizeLtRuleArguments } from '~/rules/fileSizeLt';
import type { FileSizeLteRuleArguments } from '~/rules/fileSizeLte';
import type { GtRuleArguments } from '~/rules/gt';
import type { GteRuleArguments } from '~/rules/gte';
import type { LtRuleArguments } from '~/rules/lt';
import type { LteRuleArguments } from '~/rules/lte';
import type { NotContainsAllRuleArguments } from '~/rules/notContainsAll';
import type { NotContainsAnyRuleArguments } from '~/rules/notContainsAny';
import type { NotEqualsRuleArguments } from '~/rules/notEquals';
import type { NotOneOfRuleArguments } from '~/rules/notOneOf';
import type { NotSubsetOfRuleArguments } from '~/rules/notSubsetOf';
import type { OneOfRuleArguments } from '~/rules/oneOf';
import type { ProtocolRuleArguments } from '~/rules/protocol';
import type { SameRuleArguments } from '~/rules/same';
import type { SizeRuleArguments } from '~/rules/size';
import type { StartsWithRuleArguments } from '~/rules/startsWith';
import type { StringContainsAllRuleArguments } from '~/rules/stringContainsAll';
import type { StringContainsAnyRuleArguments } from '~/rules/stringContainsAny';
import type { StringLengthRuleArguments } from '~/rules/stringLength';
import type { StringLengthBetweenRuleArguments } from '~/rules/stringLengthBetween';
import type { StringLengthGtRuleArguments } from '~/rules/stringLengthGt';
import type { StringLengthGteRuleArguments } from '~/rules/stringLengthGte';
import type { StringLengthLtRuleArguments } from '~/rules/stringLengthLt';
import type { StringLengthLteRuleArguments } from '~/rules/stringLengthLte';
import type { StringNotContainsAllRuleArguments } from '~/rules/stringNotContainsAll';
import type { StringNotContainsAnyRuleArguments } from '~/rules/stringNotContainsAny';
import type { SubsetOfRuleArguments } from '~/rules/subsetOf';

const en: Messages = {
  accepted: field => `The ${field} field must be accepted.`,
  alpha: field => `The ${field} field must only contain letters.`,
  alphaDash: field => `The ${field} field must only contain letters, numbers, dashes and underscores.`,
  alphaDashDot: field => `The ${field} field must only contain letters, numbers, dashes, underscores and dots.`,
  alphaNum: field => `The ${field} field must only contain letters and numbers.`,
  array: field => `The ${field} field must be an array.`,
  arrayLength: (field, args) => {
    const { length } = args as ArrayLengthRuleArguments;
    return `The ${field} field must be ${formatNumber(length)} items.`;
  },
  arrayLengthBetween: (field, args) => {
    const { min, max } = args as ArrayLengthBetweenRuleArguments;
    return `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} items.`;
  },
  arrayLengthGt: (field, args) => {
    const { length } = args as ArrayLengthGtRuleArguments;
    return `The ${field} field must be greater than ${formatNumber(length)} items.`;
  },
  arrayLengthGte: (field, args) => {
    const { length } = args as ArrayLengthGteRuleArguments;
    return `The ${field} field must be greater than or equal to ${formatNumber(length)} items.`;
  },
  arrayLengthLte: (field, args) => {
    const { length } = args as ArrayLengthLteRuleArguments;
    return `The ${field} field must be less than or equal to ${formatNumber(length)} items.`;
  },
  arrayLengthLt: (field, args) => {
    const { length } = args as ArrayLengthLtRuleArguments;
    return `The ${field} field must be less than ${formatNumber(length)} items.`;
  },
  ascii: field => `The ${field} field must only contain ASCII characters and symbols.`,
  between: (field, args) => {
    const { min, max } = args as BetweenRuleArguments;
    return {
      number: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)}.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)}.`,
    };
  },
  boolean: field => `The ${field} field must be a boolean value.`,
  containsAll: (field, args) => {
    const { values } = args as ContainsAllRuleArguments;
    return `The ${field} field must contain all of the following values: ${values.map(quote).join(', ')}.`;
  },
  containsAny: (field, args) => {
    const { values } = args as ContainsAnyRuleArguments;
    return `The ${field} field must contain at least one of the following values: ${values.map(quote).join(', ')}.`;
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
  fileSizeBetween: (field, args) => {
    const { min, max } = args as FileSizeBetweenRuleArguments;
    return {
      file: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} kilobytes.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)} kilobytes.`,
    };
  },
  fileSizeGt: (field, args) => {
    const { size } = args as FileSizeGtRuleArguments;
    return {
      file: `The ${field} field must be greater than ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is greater than ${formatNumber(size)} kilobytes.`,
    };
  },
  fileSizeGte: (field, args) => {
    const { size } = args as FileSizeGteRuleArguments;
    return {
      file: `The ${field} field must be greater than or equal to ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is greater than or equal to ${formatNumber(size)} kilobytes.`,
    };
  },
  fileSizeLt: (field, args) => {
    const { size } = args as FileSizeLtRuleArguments;
    return {
      file: `The ${field} field must be less than ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is less than ${formatNumber(size)} kilobytes.`,
    };
  },
  fileSizeLte: (field, args) => {
    const { size } = args as FileSizeLteRuleArguments;
    return {
      file: `The ${field} field must be less than or equal to ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is less than or equal to ${formatNumber(size)} kilobytes.`,
    };
  },
  fileSize: (field, args) => {
    const { size } = args as FileSizeRuleArguments;
    return {
      file: `The ${field} field must be ${formatNumber(size)} kilobytes.`,
      array: `The ${field} field must contain items where each item is ${formatNumber(size)} kilobytes.`,
    };
  },
  http: field => `The ${field} field must start with the "http://" protocol.`,
  httpOrHttps: field => `The ${field} field must start with the "http://" or "https://" protocols.`,
  https: field => `The ${field} field must start with the "https://" protocol.`,
  integer: field => `The ${field} field must be an integer.`,
  ip: field => `The ${field} field must be a valid IP address.`,
  ipv4: field => `The ${field} field must be a valid IPv4 address.`,
  ipv6: field => `The ${field} field must be a valid IPv6 address.`,
  json: field => `The ${field} field must be a valid JSON string.`,
  lowercase: field => `The ${field} field must be lowercase.`,
  lt: (field, args) => {
    const { value } = args as LtRuleArguments;
    return {
      number: `The ${field} field must be less than ${formatNumber(value)}.`,
      array: `The ${field} field must contain items where each item is less than ${formatNumber(value)}.`,
    };
  },
  lte: (field, args) => {
    const { value } = args as LteRuleArguments;
    return {
      number: `The ${field} field must be less than or equal to ${formatNumber(value)}.`,
      array: `The ${field} field must contain items where each item is less than or equal to ${formatNumber(value)}.`,
    };
  },
  gt: (field, args) => {
    const { value } = args as GtRuleArguments;
    return {
      number: `The ${field} field must be greater than ${formatNumber(value)}.`,
      array: `The ${field} field must contain items where each item is greater than ${formatNumber(value)}.`,
    };
  },
  gte: (field, args) => {
    const { value } = args as GteRuleArguments;
    return {
      number: `The ${field} field must be greater than or equal to ${formatNumber(value)}.`,
      array: `The ${field} field must contain items where each item is greater than or equal to ${formatNumber(value)}.`,
    };
  },
  notContainsAll: (field, args) => {
    const { values } = args as NotContainsAllRuleArguments;
    return `The ${field} field must not contain all of the following values together: ${values.map(quote).join(', ')}.`;
  },
  notContainsAny: (field, args) => {
    const { values } = args as NotContainsAnyRuleArguments;
    return `The ${field} field must not contain any of the following values: ${values.map(quote).join(', ')}.`;
  },
  notEquals: (field, args) => {
    const { value } = args as NotEqualsRuleArguments;
    return `The ${field} field must not be equal to ${value}.`;
  },
  notOneOf: (field, args) => {
    const { values } = args as NotOneOfRuleArguments;
    return `The ${field} field must not be one of the following values: ${values.map(quote).join(', ')}.`;
  },
  notSubsetOf: (field, args) => {
    const { values } = args as NotSubsetOfRuleArguments;
    return `The ${field} field must not be a subset of the following values: ${values.map(quote).join(', ')}.`;
  },
  number: field => `The ${field} field must be a number.`,
  numeric: field => `The ${field} field must be a number.`,
  object: field => `The ${field} field must be an object.`,
  oneOf: (field, args) => {
    const { values } = args as OneOfRuleArguments;
    return `The ${field} field must be one of the following values: ${values.map(quote).join(', ')}.`;
  },
  protocol: (field, args) => {
    const { values } = args as ProtocolRuleArguments;
    if (values.length === 1) {
      const [value] = values;
      return `The ${field} field must start with the "${value}://" protocol.`;
    }
    return `The ${field} field must start with one of the following protocols: ${values.map(v => `${v}://`).map(quote).join(', ')}.`;
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
    const { value } = args as StartsWithRuleArguments;
    return `The ${field} field must start with ${value}.`;
  },
  string: field => `The ${field} field must be a string.`,
  stringContainsAll: (field, args) => {
    const { values } = args as StringContainsAllRuleArguments;
    return `The ${field} field must contain all of the following text: ${values.map(quote).join(', ')}.`;
  },
  stringContainsAny: (field, args) => {
    const { values } = args as StringContainsAnyRuleArguments;
    return `The ${field} field must contain at least one of the following text: ${values.map(quote).join(', ')}.`;
  },
  stringLength: (field, args) => {
    const { length } = args as StringLengthRuleArguments;
    return {
      string: `The ${field} field must be ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is ${formatNumber(length)} characters.`,
    };
  },
  stringLengthBetween: (field, args) => {
    const { min, max } = args as StringLengthBetweenRuleArguments;
    return {
      string: `The ${field} field must be between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
      array: `The ${field} field must contain items where each item is between ${formatNumber(min)} and ${formatNumber(max)} characters.`,
    };
  },
  stringLengthGt: (field, args) => {
    const { length } = args as StringLengthGtRuleArguments;
    return {
      string: `The ${field} field must be greater than ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is greater than ${formatNumber(length)} characters.`,
    };
  },
  stringLengthGte: (field, args) => {
    const { length } = args as StringLengthGteRuleArguments;
    return {
      string: `The ${field} field must be greater than or equal to ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is greater than or equal to ${formatNumber(length)} characters.`,
    };
  },
  stringLengthLt: (field, args) => {
    const { length } = args as StringLengthLtRuleArguments;
    return {
      string: `The ${field} field must be less than ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is less than ${formatNumber(length)} characters.`,
    };
  },
  stringLengthLte: (field, args) => {
    const { length } = args as StringLengthLteRuleArguments;
    return {
      string: `The ${field} field must be less than or equal to ${formatNumber(length)} characters.`,
      array: `The ${field} field must contain items where each item is less than or equal to ${formatNumber(length)} characters.`,
    };
  },
  stringNotContainsAll: (field, args) => {
    const { values } = args as StringNotContainsAllRuleArguments;
    return `The ${field} field must not contain all of the following text together: ${values.map(quote).join(', ')}.`;
  },
  stringNotContainsAny: (field, args) => {
    const { values } = args as StringNotContainsAnyRuleArguments;
    return `The ${field} field must not contain any of the following text: ${values.map(quote).join(', ')}.`;
  },
  subsetOf: (field, args) => {
    const { values } = args as SubsetOfRuleArguments;
    return `The ${field} field must be a subset of the following values: ${values.map(quote).join(', ')}.`;
  },
  unique: field => `The ${field} field has already been taken.`,
  uppercase: field => `The ${field} field must be uppercase.`,
  url: field => `The ${field} field must be a valid URL.`,
};

export default en;
