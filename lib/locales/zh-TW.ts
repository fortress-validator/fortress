import type { Messages } from '@fortress-validator/types';
import { formatNumber, quote } from '@fortress-validator/utils';
import type { ArrayLengthRuleArguments } from '~/rules/arrayLength';
import type { ArrayLengthBetweenRuleArguments } from '~/rules/arrayLengthBetween';
import type { ArrayLengthGtRuleArguments } from '~/rules/arrayLengthGt';
import type { ArrayLengthGteRuleArguments } from '~/rules/arrayLengthGte';
import type { ArrayLengthLtRuleArguments } from '~/rules/arrayLengthLt';
import type { ArrayLengthLteRuleArguments } from '~/rules/arrayLengthLte';
import type { BetweenRuleArguments } from '~/rules/between';
import type { ContainsRuleArguments } from '~/rules/contains';
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
import type { NotContainsRuleArguments } from '~/rules/notContains';
import type { NotContainsAllRuleArguments } from '~/rules/notContainsAll';
import type { NotContainsAnyRuleArguments } from '~/rules/notContainsAny';
import type { NotEndsWithRuleArguments } from '~/rules/notEndsWith';
import type { NotEqualsRuleArguments } from '~/rules/notEquals';
import type { NotOneOfRuleArguments } from '~/rules/notOneOf';
import type { NotStartsWithRuleArguments } from '~/rules/notStartsWith';
import type { NotSubsetOfRuleArguments } from '~/rules/notSubsetOf';
import type { OneOfRuleArguments } from '~/rules/oneOf';
import type { ProtocolRuleArguments } from '~/rules/protocol';
import type { SameRuleArguments } from '~/rules/same';
import type { SizeRuleArguments } from '~/rules/size';
import type { StartsWithRuleArguments } from '~/rules/startsWith';
import type { StringContainsRuleArguments } from '~/rules/stringContains';
import type { StringContainsAllRuleArguments } from '~/rules/stringContainsAll';
import type { StringContainsAnyRuleArguments } from '~/rules/stringContainsAny';
import type { StringLengthRuleArguments } from '~/rules/stringLength';
import type { StringLengthBetweenRuleArguments } from '~/rules/stringLengthBetween';
import type { StringLengthGtRuleArguments } from '~/rules/stringLengthGt';
import type { StringLengthGteRuleArguments } from '~/rules/stringLengthGte';
import type { StringLengthLtRuleArguments } from '~/rules/stringLengthLt';
import type { StringLengthLteRuleArguments } from '~/rules/stringLengthLte';
import type { StringNotContainsRuleArguments } from '~/rules/stringNotContains';
import type { StringNotContainsAllRuleArguments } from '~/rules/stringNotContainsAll';
import type { StringNotContainsAnyRuleArguments } from '~/rules/stringNotContainsAny';
import type { SubsetOfRuleArguments } from '~/rules/subsetOf';

const zhTW: Messages = {
  accepted: () => '此欄位必須被同意',
  alpha: () => '此欄位只能包含字母',
  alphaDash: () => '此欄位只能包含字母、數字、連接號和底線',
  alphaDashDot: () => '此欄位只能包含字母、數字、連接號、底線和點',
  alphaNum: () => '此欄位只能包含字母和數字',
  array: () => '此欄位必須是一個陣列',
  arrayLength: (_, args) => {
    const { length } = args as ArrayLengthRuleArguments;
    return `此欄位必須是${formatNumber(length)}個項目`;
  },
  arrayLengthBetween: (_, args) => {
    const { min, max } = args as ArrayLengthBetweenRuleArguments;
    return `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個項目之間`;
  },
  arrayLengthGt: (_, args) => {
    const { length } = args as ArrayLengthGtRuleArguments;
    return `此欄位必須大於${formatNumber(length)}個項目`;
  },
  arrayLengthGte: (_, args) => {
    const { length } = args as ArrayLengthGteRuleArguments;
    return `此欄位必須大於或等於${formatNumber(length)}個項目`;
  },
  arrayLengthLt: (_, args) => {
    const { length } = args as ArrayLengthLtRuleArguments;
    return `此欄位必須小於${formatNumber(length)}個項目`;
  },
  arrayLengthLte: (_, args) => {
    const { length } = args as ArrayLengthLteRuleArguments;
    return `此欄位必須小於或等於${formatNumber(length)}個項目`;
  },
  ascii: () => '此欄位只能包含 ASCII 字元和符號',
  between: (_, args) => {
    const { min, max } = args as BetweenRuleArguments;
    return {
      number: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}`,
      array: `此欄位中的每個項目都必須介於${formatNumber(min)}到${formatNumber(max)}`,
    };
  },
  boolean: () => '此欄位必須是一個布林值',
  contains: (_, args) => {
    const { value } = args as ContainsRuleArguments;
    return `此欄位必須包含${quote(value)}`;
  },
  containsAll: (_, args) => {
    const { values } = args as ContainsAllRuleArguments;
    return `此欄位必須包含以下所有項目：${values.map(quote).join(', ')}`;
  },
  containsAny: (_, args) => {
    const { values } = args as ContainsAnyRuleArguments;
    return `此欄位必須包含以下其中一個項目：${values.map(quote).join(', ')}`;
  },
  declined: () => '此欄位必須被拒絕',
  different: (_, args) => {
    const { field: other } = args as DifferentRuleArguments;
    return `此欄位必須和${other}欄位不同`;
  },
  distinct: () => '此欄位不能包含重複的值',
  domain: () => '此欄位必須是有效的網域',
  email: () => '此欄位必須是有效的電子郵件地址',
  endsWith: (_, args) => {
    const { value } = args as EndsWithRuleArguments;
    return `此欄位必須以${quote(value)}結尾`;
  },
  equals: (_, args) => {
    const { value } = args as EqualsRuleArguments;
    return `此欄位必須是${value}`;
  },
  file: () => '此欄位必須是檔案',
  fileSize: (_, args) => {
    const { size } = args as FileSizeRuleArguments;
    return {
      file: `此欄位必須是${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都必須是${formatNumber(size)} KB`,
    };
  },
  fileSizeBetween: (_, args) => {
    const { min, max } = args as FileSizeBetweenRuleArguments;
    return {
      file: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)} KB 之間`,
      array: `此欄位中的每個項目都必須介於${formatNumber(min)}到${formatNumber(max)} KB 之間`,
    };
  },
  fileSizeGt: (_, args) => {
    const { size } = args as FileSizeGtRuleArguments;
    return {
      file: `此欄位必須大於${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都必須大於${formatNumber(size)} KB`,
    };
  },
  fileSizeGte: (_, args) => {
    const { size } = args as FileSizeGteRuleArguments;
    return {
      file: `此欄位必須大於或等於${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都必須大於或等於${formatNumber(size)} KB`,
    };
  },
  fileSizeLt: (_, args) => {
    const { size } = args as FileSizeLtRuleArguments;
    return {
      file: `此欄位必須小於${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都必須小於${formatNumber(size)} KB`,
    };
  },
  fileSizeLte: (_, args) => {
    const { size } = args as FileSizeLteRuleArguments;
    return {
      file: `此欄位必須小於或等於${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都必須小於或等於${formatNumber(size)} KB`,
    };
  },
  gt: (_, args) => {
    const { value } = args as GtRuleArguments;
    return {
      number: `此欄位必須大於${formatNumber(value)}`,
      array: `此欄位中的每個項目都必須大於${formatNumber(value)}`,
    };
  },
  gte: (_, args) => {
    const { value } = args as GteRuleArguments;
    return {
      number: `此欄位必須大於或等於${formatNumber(value)}`,
      array: `此欄位中的每個項目都必須大於或等於${formatNumber(value)}`,
    };
  },
  http: () => `此欄位必須以 "http://" 協議開頭`,
  httpOrHttps: () => `此欄位必須以 "http://" 或 "https://" 協議開頭`,
  https: () => `此欄位必須以 "https://" 協議開頭`,
  integer: () => '此欄位必須是整數',
  ip: () => '此欄位必須是有效的 IP 位址',
  ipv4: () => '此欄位必須是有效的 IPv4 位址',
  ipv6: () => '此欄位必須是有效的 IPv6 位址',
  json: () => '此欄位必須是有效的 JSON 字串',
  lowercase: () => '此欄位必須是小寫',
  lt: (_, args) => {
    const { value } = args as LtRuleArguments;
    return {
      number: `此欄位必須小於${formatNumber(value)}`,
      array: `此欄位中的每個項目都必須小於${formatNumber(value)}`,
    };
  },
  lte: (_, args) => {
    const { value } = args as LteRuleArguments;
    return {
      number: `此欄位必須小於或等於${formatNumber(value)}`,
      array: `此欄位中的每個項目都必須小於或等於${formatNumber(value)}`,
    };
  },
  notContains: (_, args) => {
    const { values } = args as NotContainsRuleArguments;
    return `此欄位不能包含${quote(values)}`;
  },
  notContainsAll: (_, args) => {
    const { values } = args as NotContainsAllRuleArguments;
    return `此欄位不能同時包含以下所有值：${values.map(quote).join(', ')}`;
  },
  notContainsAny: (_, args) => {
    const { values } = args as NotContainsAnyRuleArguments;
    return `此欄位不能包含以下任何值：${values.map(quote).join(', ')}`;
  },
  notEndsWith: (_, args) => {
    const { value } = args as NotEndsWithRuleArguments;
    return `此欄位不能以${quote(value)}結尾`;
  },
  notEquals: (_, args) => {
    const { value } = args as NotEqualsRuleArguments;
    return `此欄位不能是${value}`;
  },
  notOneOf: (_, args) => {
    const { values } = args as NotOneOfRuleArguments;
    return `此欄位不能是以下任何值：${values.map(quote).join(', ')}`;
  },
  notStartsWith: (_, args) => {
    const { value } = args as NotStartsWithRuleArguments;
    return `此欄位不能以${quote(value)}開頭`;
  },
  notStartsWithNumber: () => '此欄位不能以數字開頭',
  notSubsetOf: (_, args) => {
    const { values } = args as NotSubsetOfRuleArguments;
    return `此欄位不能是以下項目的子集：${values.map(quote).join(', ')}`;
  },
  number: () => '此欄位必須是數字',
  numeric: () => '此欄位必須是數字',
  object: () => '此欄位必須是物件',
  oneOf: (_, args) => {
    const { values } = args as OneOfRuleArguments;
    return `此欄位必須是以下其中一個值：${values.map(quote).join(', ')}`;
  },
  protocol: (_, args) => {
    const { values } = args as ProtocolRuleArguments;
    if (values.length === 1) {
      const [value] = values;
      return `此欄位必須以 "${value}://" 協議開頭`;
    }
    return `此欄位必須以以下其中一個協議開頭：${values.map(v => `${v}://`).map(quote).join(', ')}`;
  },
  regex: () => '此欄位必須符合所需的格式',
  required: () => '此欄位為必填',
  same: (_, args) => {
    const { field: other } = args as SameRuleArguments;
    return `此欄位必須與${other}欄位相同`;
  },
  size: (_, args) => {
    const { size } = args as SizeRuleArguments;
    return {
      number: `此欄位必須是${formatNumber(size)}`,
      array: `此欄位中的每個項目都必須是${formatNumber(size)}`,
    };
  },
  startsWith: (_, args) => {
    const { value } = args as StartsWithRuleArguments;
    return `此欄位必須以${quote(value)}開頭`;
  },
  startsWithNumber: () => '此欄位必須以數字開頭',
  string: () => '此欄位必須是字串',
  stringContains: (_, args) => {
    const { value } = args as StringContainsRuleArguments;
    return `此欄位必須包含${quote(value)}`;
  },
  stringContainsAll: (_, args) => {
    const { values } = args as StringContainsAllRuleArguments;
    return `此欄位必須包含以下所有文字：${values.map(quote).join(', ')}`;
  },
  stringContainsAny: (_, args) => {
    const { values } = args as StringContainsAnyRuleArguments;
    return `此欄位必須包含以下其中一個文字：${values.map(quote).join(', ')}`;
  },
  stringLength: (_, args) => {
    const { length } = args as StringLengthRuleArguments;
    return {
      string: `此欄位必須是${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都必須是${formatNumber(length)}個字元`,
    };
  },
  stringLengthBetween: (_, args) => {
    const { min, max } = args as StringLengthBetweenRuleArguments;
    return {
      string: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個字元之間`,
      array: `此欄位中的每個項目都必須介於${formatNumber(min)}到${formatNumber(max)}個字元之間`,
    };
  },
  stringLengthGt: (_, args) => {
    const { length } = args as StringLengthGtRuleArguments;
    return {
      string: `此欄位必須大於${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都必須大於${formatNumber(length)}個字元`,
    };
  },
  stringLengthGte: (_, args) => {
    const { length } = args as StringLengthGteRuleArguments;
    return {
      string: `此欄位必須大於或等於${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都必須大於或等於${formatNumber(length)}個字元`,
    };
  },
  stringLengthLt: (_, args) => {
    const { length } = args as StringLengthLtRuleArguments;
    return {
      string: `此欄位必須小於${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都必須小於${formatNumber(length)}個字元`,
    };
  },
  stringLengthLte: (_, args) => {
    const { length } = args as StringLengthLteRuleArguments;
    return {
      string: `此欄位必須小於或等於${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都必須小於或等於${formatNumber(length)}個字元`,
    };
  },
  stringNotContains: (_, args) => {
    const { value } = args as StringNotContainsRuleArguments;
    return `此欄位不能包含${quote(value)}`;
  },
  stringNotContainsAll: (_, args) => {
    const { values } = args as StringNotContainsAllRuleArguments;
    return `此欄位不能同時包含以下所有文字：${values.map(quote).join(', ')}`;
  },
  stringNotContainsAny: (_, args) => {
    const { values } = args as StringNotContainsAnyRuleArguments;
    return `此欄位不能包含以下任何文字：${values.map(quote).join(', ')}`;
  },
  subsetOf: (_, args) => {
    const { values } = args as SubsetOfRuleArguments;
    return `此欄位必須是以下項目的子集：${values.map(quote).join(', ')}`;
  },
  unique: () => '此欄位已經存在',
  uppercase: () => '此欄位必須是大寫',
  url: () => '此欄位必須是有效的 URL',
};

export default zhTW;
