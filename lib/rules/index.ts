import { Rules } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
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
  alphaDash,
  alphaDashDot,
  between,
  email,
  endsWith,
  in: _in,
  json,
  lowercase,
  max,
  min,
  notIn,
  regex,
  required,
  startsWith,
  unique,
  uppercase,
  url,
};

export default rules;
