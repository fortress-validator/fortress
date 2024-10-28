import { Rule, Rules } from '@fortress-validator/types';
import alpha from './alpha';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import alphaNum from './alphaNum';
import between from './between';
import email from './email';
import endsWith from './endsWith';
import _in from './in';
import json from './json';
import lowercase from './lowercase';
import max from './max';
import min from './min';
import notIn from './notIn';
import regex from './regex';
import required from './required';
import size from './size';
import startsWith from './startsWith';
import unique from './unique';
import uppercase from './uppercase';
import url from './url';

const rules: Rules = {
  alpha: alpha as Rule,
  alphaDash: alphaDash as Rule,
  alphaDashDot: alphaDashDot as Rule,
  alphaNum: alphaNum as Rule,
  between: between as Rule,
  email: email as Rule,
  endsWith: endsWith as Rule,
  in: _in as Rule,
  json: json as Rule,
  lowercase: lowercase as Rule,
  max: max as Rule,
  min: min as Rule,
  notIn: notIn as Rule,
  regex: regex as Rule,
  required: required as Rule,
  size: size as Rule,
  startsWith: startsWith as Rule,
  unique: unique as Rule,
  uppercase: uppercase as Rule,
  url: url as Rule,
};

export default rules;
