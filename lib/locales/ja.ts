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

const ja: Messages = {
  accepted: () => 'このフィールドは承諾する必要があります',
  alpha: () => 'このフィールドはアルファベットのみを含む必要があります',
  alphaDash: () => 'このフィールドはアルファベット、数字、ハイフン、アンダースコアのみを含む必要があります',
  alphaDashDot: () => 'このフィールドはアルファベット、数字、ハイフン、アンダースコア、ドットのみを含む必要があります',
  alphaNum: () => 'このフィールドはアルファベットと数字のみを含む必要があります',
  array: () => 'このフィールドは配列である必要があります',
  arrayLength: (_, args) => {
    const { length } = args as ArrayLengthRuleArguments;
    return `このフィールドは${formatNumber(length)}項目である必要があります`;
  },
  arrayLengthBetween: (_, args) => {
    const { min, max } = args as ArrayLengthBetweenRuleArguments;
    return `このフィールドは${formatNumber(min)}から${formatNumber(max)}項目の間である必要があります`;
  },
  arrayLengthGt: (_, args) => {
    const { length } = args as ArrayLengthGtRuleArguments;
    return `このフィールドは${formatNumber(length)}項目より多い必要があります`;
  },
  arrayLengthGte: (_, args) => {
    const { length } = args as ArrayLengthGteRuleArguments;
    return `このフィールドは${formatNumber(length)}項目以上である必要があります`;
  },
  arrayLengthLt: (_, args) => {
    const { length } = args as ArrayLengthLtRuleArguments;
    return `このフィールドは${formatNumber(length)}項目より少ない必要があります`;
  },
  arrayLengthLte: (_, args) => {
    const { length } = args as ArrayLengthLteRuleArguments;
    return `このフィールドは${formatNumber(length)}項目以下である必要があります`;
  },
  ascii: () => 'このフィールドはASCII文字と記号のみを含む必要があります',
  between: (_, args) => {
    const { min, max } = args as BetweenRuleArguments;
    return {
      number: `このフィールドは${formatNumber(min)}から${formatNumber(max)}の間である必要があります`,
      array: `このフィールドの各項目は${formatNumber(min)}から${formatNumber(max)}の間である必要があります`,
    };
  },
  boolean: () => 'このフィールドはブール値である必要があります',
  contains: (_, args) => {
    const { value } = args as ContainsRuleArguments;
    return `このフィールドは${quote(value)}を含む必要があります`;
  },
  containsAll: (_, args) => {
    const { values } = args as ContainsAllRuleArguments;
    return `このフィールドは以下のすべての項目を含む必要があります：${values.map(quote).join(', ')}`;
  },
  containsAny: (_, args) => {
    const { values } = args as ContainsAnyRuleArguments;
    return `このフィールドは以下のいずれかの項目を含む必要があります：${values.map(quote).join(', ')}`;
  },
  declined: () => 'このフィールドは拒否する必要があります',
  different: (_, args) => {
    const { field: other } = args as DifferentRuleArguments;
    return `このフィールドは${other}フィールドと異なる必要があります`;
  },
  distinct: () => 'このフィールドには重複する値を含めることはできません',
  domain: () => 'このフィールドは有効なドメインである必要があります',
  email: () => 'このフィールドは有効なメールアドレスである必要があります',
  endsWith: (_, args) => {
    const { value } = args as EndsWithRuleArguments;
    return `このフィールドは${value}で終わる必要があります`;
  },
  equals: (_, args) => {
    const { value } = args as EqualsRuleArguments;
    return `このフィールドは${value}と等しくなければなりません`;
  },
  file: () => 'このフィールドはファイルである必要があります',
  fileSize: (_, args) => {
    const { size } = args as FileSizeRuleArguments;
    return {
      file: `このフィールドは${formatNumber(size)} KBである必要があります`,
      array: `このフィールドの各項目は${formatNumber(size)} KBである必要があります`,
    };
  },
  fileSizeBetween: (_, args) => {
    const { min, max } = args as FileSizeBetweenRuleArguments;
    return {
      file: `このフィールドは${formatNumber(min)}から${formatNumber(max)} KBの間である必要があります`,
      array: `このフィールドの各項目は${formatNumber(min)}から${formatNumber(max)} KBの間である必要があります`,
    };
  },
  fileSizeGt: (_, args) => {
    const { size } = args as FileSizeGtRuleArguments;
    return {
      file: `このフィールドは${formatNumber(size)} KBより大きい必要があります`,
      array: `このフィールドの各項目は${formatNumber(size)} KBより大きい必要があります`,
    };
  },
  fileSizeGte: (_, args) => {
    const { size } = args as FileSizeGteRuleArguments;
    return {
      file: `このフィールドは${formatNumber(size)} KB以上である必要があります`,
      array: `このフィールドの各項目は${formatNumber(size)} KB以上である必要があります`,
    };
  },
  fileSizeLt: (_, args) => {
    const { size } = args as FileSizeLtRuleArguments;
    return {
      file: `このフィールドは${formatNumber(size)} KBより小さい必要があります`,
      array: `このフィールドの各項目は${formatNumber(size)} KBより小さい必要があります`,
    };
  },
  fileSizeLte: (_, args) => {
    const { size } = args as FileSizeLteRuleArguments;
    return {
      file: `このフィールドは${formatNumber(size)} KB以下である必要があります`,
      array: `このフィールドの各項目は${formatNumber(size)} KB以下である必要があります`,
    };
  },
  gt: (_, args) => {
    const { value } = args as GtRuleArguments;
    return {
      number: `このフィールドは${formatNumber(value)}より大きい必要があります`,
      array: `このフィールドの各項目は${formatNumber(value)}より大きい必要があります`,
    };
  },
  gte: (_, args) => {
    const { value } = args as GteRuleArguments;
    return {
      number: `このフィールドは${formatNumber(value)}以上である必要があります`,
      array: `このフィールドの各項目は${formatNumber(value)}以上である必要があります`,
    };
  },
  http: () => `このフィールドは『http://』プロトコルで始まる必要があります`,
  httpOrHttps: () => `このフィールドは『http://』または『https://』プロトコルで始まる必要があります`,
  https: () => `このフィールドは『https://』プロトコルで始まる必要があります`,
  integer: () => 'このフィールドは整数である必要があります',
  ip: () => 'このフィールドは有効なIPアドレスである必要があります',
  ipv4: () => 'このフィールドは有効なIPv4アドレスである必要があります',
  ipv6: () => 'このフィールドは有効なIPv6アドレスである必要があります',
  json: () => 'このフィールドは有効なJSON文字列である必要があります',
  lowercase: () => 'このフィールドは小文字である必要があります',
  lt: (_, args) => {
    const { value } = args as LtRuleArguments;
    return {
      number: `このフィールドは${formatNumber(value)}より小さい必要があります`,
      array: `このフィールドの各項目は${formatNumber(value)}より小さい必要があります`,
    };
  },
  lte: (_, args) => {
    const { value } = args as LteRuleArguments;
    return {
      number: `このフィールドは${formatNumber(value)}以下である必要があります`,
      array: `このフィールドの各項目は${formatNumber(value)}以下である必要があります`,
    };
  },
  notContains: (_, args) => {
    const { values } = args as NotContainsRuleArguments;
    return `このフィールドは${quote(values)}を含むことはできません`;
  },
  notContainsAll: (_, args) => {
    const { values } = args as NotContainsAllRuleArguments;
    return `このフィールドは以下のすべての値を同時に含むことはできません：${values.map(quote).join(', ')}`;
  },
  notContainsAny: (_, args) => {
    const { values } = args as NotContainsAnyRuleArguments;
    return `このフィールドは以下のいずれの値も含むことはできません：${values.map(quote).join(', ')}`;
  },
  notEndsWith: (_, args) => {
    const { value } = args as NotEndsWithRuleArguments;
    return `このフィールドは${quote(value)}で終わることはできません`;
  },
  notEquals: (_, args) => {
    const { value } = args as NotEqualsRuleArguments;
    return `このフィールドは${value}であってはなりません`;
  },
  notOneOf: (_, args) => {
    const { values } = args as NotOneOfRuleArguments;
    return `このフィールドは以下のいずれの値であってはなりません：${values.map(quote).join(', ')}`;
  },
  notStartsWith: (_, args) => {
    const { value } = args as NotStartsWithRuleArguments;
    return `このフィールドは${quote(value)}で始まってはなりません`;
  },
  notStartsWithNumber: () => 'このフィールドは数字で始まってはなりません',
  notSubsetOf: (_, args) => {
    const { values } = args as NotSubsetOfRuleArguments;
    return `このフィールドは以下の項目のサブセットであってはなりません：${values.map(quote).join(', ')}`;
  },
  number: () => 'このフィールドは数値である必要があります',
  numeric: () => 'このフィールドは数値である必要があります',
  object: () => 'このフィールドはオブジェクトである必要があります',
  oneOf: (_, args) => {
    const { values } = args as OneOfRuleArguments;
    return `このフィールドは以下のいずれかの値である必要があります：${values.map(quote).join(', ')}`;
  },
  protocol: (_, args) => {
    const { values } = args as ProtocolRuleArguments;
    if (values.length === 1) {
      const [value] = values;
      return `このフィールドは『${value}://』プロトコルで始まる必要があります`;
    }
    return `このフィールドは以下のいずれかのプロトコルで始まる必要があります：${values.map(v => `${v}://`).map(quote).join(', ')}`;
  },
  regex: () => 'このフィールドは必要な形式に一致する必要があります',
  required: () => 'このフィールドは必須です',
  same: (_, args) => {
    const { field: other } = args as SameRuleArguments;
    return `このフィールドは${other}フィールドと同じである必要があります`;
  },
  size: (_, args) => {
    const { size } = args as SizeRuleArguments;
    return {
      number: `このフィールドは${formatNumber(size)}である必要があります`,
      array: `このフィールドの各項目は${formatNumber(size)}である必要があります`,
    };
  },
  startsWith: (_, args) => {
    const { value } = args as StartsWithRuleArguments;
    return `このフィールドは${value}で始まる必要があります`;
  },
  startsWithNumber: () => 'このフィールドは数字で始まる必要があります',
  string: () => 'このフィールドは文字列である必要があります',
  stringContains: (_, args) => {
    const { value } = args as StringContainsRuleArguments;
    return `このフィールドは${quote(value)}を含む必要があります`;
  },
  stringContainsAll: (_, args) => {
    const { values } = args as StringContainsAllRuleArguments;
    return `このフィールドは以下のすべてのテキストを含む必要があります：${values.map(quote).join(', ')}`;
  },
  stringContainsAny: (_, args) => {
    const { values } = args as StringContainsAnyRuleArguments;
    return `このフィールドは以下のいずれかのテキストを含む必要があります：${values.map(quote).join(', ')}`;
  },
  stringLength: (_, args) => {
    const { length } = args as StringLengthRuleArguments;
    return {
      string: `このフィールドは${formatNumber(length)}文字である必要があります`,
      array: `このフィールドの各項目は${formatNumber(length)}文字である必要があります`,
    };
  },
  stringLengthBetween: (_, args) => {
    const { min, max } = args as StringLengthBetweenRuleArguments;
    return {
      string: `このフィールドは${formatNumber(min)}から${formatNumber(max)}文字の間である必要があります`,
      array: `このフィールドの各項目は${formatNumber(min)}から${formatNumber(max)}文字の間である必要があります`,
    };
  },
  stringLengthGt: (_, args) => {
    const { length } = args as StringLengthGtRuleArguments;
    return {
      string: `このフィールドは${formatNumber(length)}文字より多い必要があります`,
      array: `このフィールドの各項目は${formatNumber(length)}文字より多い必要があります`,
    };
  },
  stringLengthGte: (_, args) => {
    const { length } = args as StringLengthGteRuleArguments;
    return {
      string: `このフィールドは${formatNumber(length)}文字以上である必要があります`,
      array: `このフィールドの各項目は${formatNumber(length)}文字以上である必要があります`,
    };
  },
  stringLengthLt: (_, args) => {
    const { length } = args as StringLengthLtRuleArguments;
    return {
      string: `このフィールドは${formatNumber(length)}文字より少ない必要があります`,
      array: `このフィールドの各項目は${formatNumber(length)}文字より少ない必要があります`,
    };
  },
  stringLengthLte: (_, args) => {
    const { length } = args as StringLengthLteRuleArguments;
    return {
      string: `このフィールドは${formatNumber(length)}文字以下である必要があります`,
      array: `このフィールドの各項目は${formatNumber(length)}文字以下である必要があります`,
    };
  },
  stringNotContains: (_, args) => {
    const { value } = args as StringNotContainsRuleArguments;
    return `このフィールドは${quote(value)}を含むことはできません`;
  },
  stringNotContainsAll: (_, args) => {
    const { values } = args as StringNotContainsAllRuleArguments;
    return `このフィールドは以下のすべてのテキストを同時に含むことはできません：${values.map(quote).join(', ')}`;
  },
  stringNotContainsAny: (_, args) => {
    const { values } = args as StringNotContainsAnyRuleArguments;
    return `このフィールドは以下のいずれのテキストも含むことはできません：${values.map(quote).join(', ')}`;
  },
  subsetOf: (_, args) => {
    const { values } = args as SubsetOfRuleArguments;
    return `このフィールドは以下の項目のサブセットである必要があります：${values.map(quote).join(', ')}`;
  },
  unique: () => 'このフィールドは既に存在しています',
  uppercase: () => 'このフィールドは大文字である必要があります',
  url: () => 'このフィールドは有効なURLである必要があります',
};

export default ja;
