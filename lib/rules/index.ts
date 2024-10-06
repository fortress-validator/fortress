import { Rules } from '~/types';
import alphaDash from './alphaDash';
import alphaDashDot from './alphaDashDot';
import between from './between';
import email from './email';
import endsWith from './endsWith';
import _in from './in';
import max from './max';
import min from './min';
import notIn from './notIn';
import required from './required';
import startsWith from './startsWith';

const locales: Rules = {
  alphaDash,
  alphaDashDot,
  between,
  email,
  endsWith,
  in: _in,
  max,
  min,
  notIn,
  required,
  startsWith,
};

export default locales;
