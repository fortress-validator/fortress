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

const zhTW: Messages = {
  accepted: () => '此欄位必須被同意',
  alpha: () => '此欄位只能包含字母',
  alphaDash: () => '此欄位只能包含字母、數字、連接號和底線',
  alphaDashDot: () => '此欄位只能包含字母、數字、連接號、底線和點',
  alphaNum: () => '此欄位只能包含字母和數字',
  array: () => '此欄位必須是一個陣列',
  ascii: () => '此欄位只能包含ASCII字元和符號',
  between: (_, args) => {
    const { min, max } = args as BetweenRuleArguments;
    return {
      number: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}`,
      array: `此欄位中的每個項目都必須介於${formatNumber(min)}到${formatNumber(max)}`,
    };
  },
  betweenLength: (_, args) => {
    const { min, max } = args as BetweenLengthRuleArguments;
    return `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個項目之間`;
  },
  boolean: () => '此欄位必須是一個布林值',
  containsAll: (_, args) => {
    const { values } = args as ContainsAllRuleArguments;
    return `此欄位必須包含以下所有項目：${values.join(', ')}`;
  },
  containsAny: (_, args) => {
    const { values } = args as ContainsAnyRuleArguments;
    return `此欄位必須包含以下其中一個項目：${values.join(', ')}`;
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
    return `此欄位必須以${value}結尾`;
  },
  equals: (_, args) => {
    const { value } = args as EqualsRuleArguments;
    return `此欄位必須是${value}`;
  },
  file: () => '此欄位必須是檔案',
  fileBetweenSize: (_, args) => {
    const { min, max } = args as FileBetweenSizeRuleArguments;
    return {
      file: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)} KB之間`,
      array: `此欄位中的每個項目都必須介於${formatNumber(min)}到${formatNumber(max)} KB之間`,
    };
  },
  fileMaxSize: (_, args) => {
    const { size } = args as FileMaxSizeRuleArguments;
    return {
      file: `此欄位不能大於${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都不能大於${formatNumber(size)} KB`,
    };
  },
  fileMinSize: (_, args) => {
    const { size } = args as FileMinSizeRuleArguments;
    return {
      file: `此欄位不能小於${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都不能小於${formatNumber(size)} KB`,
    };
  },
  fileSize: (_, args) => {
    const { size } = args as FileSizeRuleArguments;
    return {
      file: `此欄位必須是${formatNumber(size)} KB`,
      array: `此欄位中的每個項目都必須是${formatNumber(size)} KB`,
    };
  },
  http: () => `此欄位必須以 http:// 或 https:// 開頭`,
  https: () => `此欄位必須以 https:// 開頭`,
  integer: () => '此欄位必須是整數',
  json: () => '此欄位必須是有效的 JSON 字串',
  length: (_, args) => {
    const { length } = args as LengthRuleArguments;
    return `此欄位必須包含${formatNumber(length)}個項目`;
  },
  lowercase: () => '此欄位必須是小寫',
  max: (_, args) => {
    const { max } = args as MaxRuleArguments;
    return {
      number: `此欄位不能大於${formatNumber(max)}`,
      array: `此欄位中的每個項目都不能大於${formatNumber(max)}`,
    };
  },
  maxLength: (_, args) => {
    const { length } = args as MaxLengthRuleArguments;
    return `此欄位不能大於${formatNumber(length)}個項目`;
  },
  min: (_, args) => {
    const { min } = args as MinRuleArguments;
    return {
      number: `此欄位不能小於${formatNumber(min)}`,
      array: `此欄位中的每個項目都不能小於${formatNumber(min)}`,
    };
  },
  minLength: (_, args) => {
    const { length } = args as MinLengthRuleArguments;
    return `此欄位不能小於${formatNumber(length)}個項目`;
  },
  notContainsAll: (_, args) => {
    const { values } = args as NotContainsAllRuleArguments;
    return `此欄位不能同時包含以下所有值：${values.join(', ')}`;
  },
  notContainsAny: (_, args) => {
    const { values } = args as NotContainsAnyRuleArguments;
    return `此欄位不能包含以下任何值：${values.join(', ')}`;
  },
  notEquals: (_, args) => {
    const { value } = args as NotEqualsRuleArguments;
    return `此欄位不能是${value}`;
  },
  notOneOf: (_, args) => {
    const { values } = args as NotOneOfRuleArguments;
    return `此欄位不能是以下任何值：${values.join(', ')}`;
  },
  number: () => '此欄位必須是數字',
  numeric: () => '此欄位必須是數字',
  oneOf: (_, args) => {
    const { values } = args as OneOfRuleArguments;
    return `此欄位必須是以下任何值：${values.join(', ')}`;
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
    const { value } = args as StartsWitchRuleArguments;
    return `此欄位必須以${value}開頭`;
  },
  string: () => '此欄位必須是字串',
  stringBetweenLength: (_, args) => {
    const { min, max } = args as StringBetweenLengthRuleArguments;
    return {
      string: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個字元之間`,
      array: `此欄位中的每個項目都必須介於${formatNumber(min)}到${formatNumber(max)}個字元之間`,
    };
  },
  stringContainsAll: (_, args) => {
    const { values } = args as StringContainsAllRuleArguments;
    return `此欄位必須包含以下所有文字：${values.join(', ')}`;
  },
  stringContainsAny: (_, args) => {
    const { values } = args as StringContainsAnyRuleArguments;
    return `此欄位必須包含以下其中一個文字：${values.join(', ')}`;
  },
  stringLength: (_, args) => {
    const { length } = args as StringLengthRuleArguments;
    return {
      string: `此欄位必須是${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都必須是${formatNumber(length)}個字元`,
    };
  },
  stringMaxLength: (_, args) => {
    const { length } = args as StringMaxLengthRuleArguments;
    return {
      string: `此欄位不能大於${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都不能大於${formatNumber(length)}個字元`,
    };
  },
  stringMinLength: (_, args) => {
    const { length } = args as StringMinLengthRuleArguments;
    return {
      string: `此欄位不能小於${formatNumber(length)}個字元`,
      array: `此欄位中的每個項目都不能小於${formatNumber(length)}個字元`,
    };
  },
  stringNotContainsAll: (_, args) => {
    const { values } = args as StringNotContainsAllRuleArguments;
    return `此欄位不能同時包含以下所有文字：${values.join(', ')}`;
  },
  stringNotContainsAny: (_, args) => {
    const { values } = args as StringNotContainsAnyRuleArguments;
    return `此欄位不能包含以下任何文字：${values.join(', ')}`;
  },
  unique: () => '此欄位已經存在',
  uppercase: () => '此欄位必須是大寫',
  url: () => '此欄位必須是有效的網址',
};

export default zhTW;
