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
import { MinRuleArguments } from '~/rules/min';
import { NotEqualsRuleArguments } from '~/rules/notEquals';
import { NotInRuleArguments } from '~/rules/notIn';
import { SameRuleArguments } from '~/rules/same';
import { SizeRuleArguments } from '~/rules/size';
import { StartsWitchRuleArguments } from '~/rules/startsWith';
import { StringBetweenLengthRuleArguments } from '~/rules/stringBetweenLength';
import { StringLengthRuleArguments } from '~/rules/stringLength';
import { StringMaxLengthRuleArguments } from '~/rules/stringMaxLength';
import { StringMinLengthRuleArguments } from '~/rules/stringMinLength';

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
  in: (_, args) => {
    const { values } = args as InRuleArguments;
    return `此欄位必須是以下之一：${values.join(', ')}`;
  },
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
  min: (_, args) => {
    const { min } = args as MinRuleArguments;
    return {
      number: `此欄位不能小於${formatNumber(min)}`,
      array: `此欄位中的每個項目都不能小於${formatNumber(min)}`,
    };
  },
  notEquals: (_, args) => {
    const { value } = args as NotEqualsRuleArguments;
    return `此欄位不能是${value}`;
  },
  notIn: (_, args) => {
    const { values } = args as NotInRuleArguments;
    return `此欄位不能是以下之一：${values.join(', ')}`;
  },
  number: () => '此欄位必須是數字',
  numeric: () => '此欄位必須是數字',
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
  unique: () => '此欄位已經存在',
  uppercase: () => '此欄位必須是大寫',
  url: () => '此欄位必須是有效的網址',
};

export default zhTW;
