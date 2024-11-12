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
      array: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個項目之間`,
      file: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}KB 之間`,
      number: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}`,
      string: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個字元之間`,
    };
  },
  boolean: () => '此欄位必須是一個布林值',
  contains: (_, args) => {
    const { values } = args as ContainsRuleArguments;
    return `此欄位必須是以下之一：${values.join(', ')}`;
  },
  declined: () => '此欄位必須被拒絕',
  different: (_, args) => {
    const { field: other } = args as DifferentRuleArguments;
    return `此欄位必須和${other}欄位不同`;
  },
  distinct: () => '此欄位不能包含重複的值',
  email: () => '此欄位必須是有效的電子郵件地址',
  endsWith: (_, args) => {
    const { values } = args as EndsWithRuleArguments;
    return typeof values === 'string'
      ? `此欄位必須以${values}結尾`
      : `此欄位必須以以下之一結尾：${values.join(', ')}`;
  },
  integer: () => '此欄位必須是整數',
  json: () => '此欄位必須是有效的 JSON 字串',
  lowercase: () => '此欄位必須是小寫',
  max: (_, args) => {
    const { max } = args as MaxRuleArguments;
    return {
      array: `此欄位不能大於${formatNumber(max)}個項目`,
      file: `此欄位不能大於${formatNumber(max)}KB`,
      number: `此欄位不能大於${formatNumber(max)}`,
      string: `此欄位不能大於${formatNumber(max)}個字元`,
    };
  },
  min: (_, args) => {
    const { min } = args as MinRuleArguments;
    return {
      array: `此欄位不能小於${formatNumber(min)}個項目`,
      file: `此欄位不能小於${formatNumber(min)}KB`,
      number: `此欄位不能小於${formatNumber(min)}`,
      string: `此欄位不能小於${formatNumber(min)}個字元`,
    };
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
      array: `此欄位必須包含${formatNumber(size)}個項目`,
      file: `此欄位必須是${formatNumber(size)}KB`,
      number: `此欄位必須是${formatNumber(size)}`,
      string: `此欄位必須是${formatNumber(size)}個字元`,
    };
  },
  startsWith: (_, args) => {
    const { values } = args as StartsWitchRuleArguments;
    return typeof values === 'string'
      ? `此欄位必須以${values}開頭`
      : `此欄位必須以以下之一開頭：${values.join(', ')}`;
  },
  string: () => '此欄位必須是字串',
  unique: () => '此欄位已經存在',
  uppercase: () => '此欄位必須是大寫',
  url: () => '此欄位必須是有效的網址',
};

export default zhTW;
