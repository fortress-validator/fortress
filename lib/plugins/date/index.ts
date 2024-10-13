import { Plugin } from '@fortress-validator/types';
import locales from './locales';
import rules from './rules';

const plugin: Plugin = {
  locales,
  rules,
};

export default plugin;
