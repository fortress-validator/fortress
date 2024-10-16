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
import startsWith from './startsWith';
import unique from './unique';
import uppercase from './uppercase';
import url from './url';

const rules: Rules = {
  alpha,
  alphaDash,
  alphaDashDot,
  alphaNum,
  between: between as Rule,
  email,
  endsWith: endsWith as Rule,
  in: _in as Rule,
  json,
  lowercase,
  max: max as Rule,
  min: min as Rule,
  notIn: notIn as Rule,
  regex: regex as Rule,
  required,
  startsWith: startsWith as Rule,
  unique: unique as Rule,
  uppercase,
  url,
};

export default rules;
