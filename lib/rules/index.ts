import { Rule, Rules } from '@fortress-validator/types';
import alpha from './alpha';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import alphaNum from './alphaNum';
import ascii from './ascii';
import between from './between';
import boolean from './boolean';
import email from './email';
import endsWith from './endsWith';
import _in from './in';
import integer from './integer';
import json from './json';
import lowercase from './lowercase';
import max from './max';
import min from './min';
import notIn from './notIn';
import number from './number';
import numeric from './numeric';
import regex from './regex';
import required from './required';
import size from './size';
import startsWith from './startsWith';
import string from './string';
import unique from './unique';
import uppercase from './uppercase';
import url from './url';

const rules: Rules = {
  alpha: alpha as Rule,
  alphaDash: alphaDash as Rule,
  alphaDashDot: alphaDashDot as Rule,
  alphaNum: alphaNum as Rule,
  ascii: ascii as Rule,
  between: between as Rule,
  boolean: boolean as Rule,
  email: email as Rule,
  endsWith: endsWith as Rule,
  in: _in as Rule,
  integer: integer as Rule,
  json: json as Rule,
  lowercase: lowercase as Rule,
  max: max as Rule,
  min: min as Rule,
  notIn: notIn as Rule,
  number: number as Rule,
  numeric: numeric as Rule,
  regex: regex as Rule,
  required: required as Rule,
  size: size as Rule,
  startsWith: startsWith as Rule,
  string: string as Rule,
  unique: unique as Rule,
  uppercase: uppercase as Rule,
  url: url as Rule,
};

export default rules;
