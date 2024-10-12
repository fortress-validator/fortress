import { BetweenRuleArguments } from '~/rules/between';
import { EndsWithRuleArguments } from '~/rules/endsWith';
import { InRuleArguments } from '~/rules/in';
import { MaxRuleArguments } from '~/rules/max';
import { MinRuleArguments } from '~/rules/min';
import { NotInRuleArguments } from '~/rules/notIn';
import { StartsWitchRuleArguments } from '~/rules/startsWith';
import { Messages } from '~/types';
import { formatNumber } from '~/utils';

const zhTW: Messages = {
  alphaDash: () => '此欄位只能包含字母、數字、連接號和底線',
  alphaDashDot: () => '此欄位只能包含字母、數字、連接號、底線和點',
  between: (_, { min, max }: BetweenRuleArguments) => ({
    array: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個項目之間`,
    file: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}KB 之間`,
    number: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}`,
    string: `此欄位必須介於${formatNumber(min)}到${formatNumber(max)}個字元之間`,
  }),
  email: () => '此欄位必須是有效的電子郵件地址',
  endsWith: (_, { values }: EndsWithRuleArguments) => {
    return typeof values === 'string'
      ? `此欄位必須以${values}結尾`
      : `此欄位必須以以下之一結尾：${values.join(', ')}`;
  },
  in: (_, { values }: InRuleArguments) => `此欄位必須是以下之一：${values.join(', ')}`,
  json: () => '此欄位必須是有效的 JSON 字串',
  lowercase: () => '此欄位必須是小寫',
  max: (_, { max }: MaxRuleArguments) => ({
    array: `此欄位不能大於${formatNumber(max)}個項目`,
    file: `此欄位不能大於${formatNumber(max)}KB`,
    number: `此欄位不能大於${formatNumber(max)}`,
    string: `此欄位不能大於${formatNumber(max)}個字元`,
  }),
  min: (_, { min }: MinRuleArguments) => ({
    array: `此欄位不能小於${formatNumber(min)}個項目`,
    file: `此欄位不能小於${formatNumber(min)}KB`,
    number: `此欄位不能小於${formatNumber(min)}`,
    string: `此欄位不能小於${formatNumber(min)}個字元`,
  }),
  notIn: (_, { values }: NotInRuleArguments) => `此欄位不能是以下之一：${values.join(', ')}`,
  regex: () => '此欄位必須符合所需的格式',
  required: () => '此欄位為必填',
  startsWith: (_, { values }: StartsWitchRuleArguments) => {
    return typeof values === 'string'
      ? `此欄位必須以${values}開頭`
      : `此欄位必須以以下之一開頭：${values.join(', ')}`;
  },
  unique: () => '此欄位已經存在',
  uppercase: () => '此欄位必須是大寫',
  url: () => '此欄位必須是有效的網址',
};

export default zhTW;
