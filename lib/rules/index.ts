import { Rule, Rules } from '@fortress-validator/types';
import accepted from './accepted';
import alpha from './alpha';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import alphaNum from './alphaNum';
import array from './array';
import ascii from './ascii';
import between from './between';
import boolean from './boolean';
import containsAll from './containsAll';
import containsAny from './containsAny';
import declined from './declined';
import different from './different';
import distinct from './distinct';
import email from './email';
import endsWith from './endsWith';
import equals from './equals';
import file from './file';
import _in from './in';
import integer from './integer';
import json from './json';
import lowercase from './lowercase';
import max from './max';
import min from './min';
import notEquals from './notEquals';
import notIn from './notIn';
import number from './number';
import numeric from './numeric';
import regex from './regex';
import required from './required';
import same from './same';
import size from './size';
import startsWith from './startsWith';
import string from './string';
import unique from './unique';
import uppercase from './uppercase';
import url from './url';

const rules: Rules = {
  accepted: accepted as Rule<unknown>,
  alpha: alpha as Rule<unknown>,
  alphaDash: alphaDash as Rule<unknown>,
  alphaDashDot: alphaDashDot as Rule<unknown>,
  alphaNum: alphaNum as Rule<unknown>,
  array: array as Rule<unknown>,
  ascii: ascii as Rule<unknown>,
  between: between as Rule<unknown>,
  boolean: boolean as Rule<unknown>,
  containsAll: containsAll as Rule<unknown>,
  containsAny: containsAny as Rule<unknown>,
  declined: declined as Rule<unknown>,
  different: different as Rule<unknown>,
  distinct: distinct as Rule<unknown>,
  email: email as Rule<unknown>,
  endsWith: endsWith as Rule<unknown>,
  equals: equals as Rule<unknown>,
  file: file as Rule<unknown>,
  in: _in as Rule<unknown>,
  integer: integer as Rule<unknown>,
  json: json as Rule<unknown>,
  lowercase: lowercase as Rule<unknown>,
  max: max as Rule<unknown>,
  min: min as Rule<unknown>,
  notEquals: notEquals as Rule<unknown>,
  notIn: notIn as Rule<unknown>,
  number: number as Rule<unknown>,
  numeric: numeric as Rule<unknown>,
  regex: regex as Rule<unknown>,
  required: required as Rule<unknown>,
  same: same as Rule<unknown>,
  size: size as Rule<unknown>,
  startsWith: startsWith as Rule<unknown>,
  string: string as Rule<unknown>,
  unique: unique as Rule<unknown>,
  uppercase: uppercase as Rule<unknown>,
  url: url as Rule<unknown>,
};

export default rules;
