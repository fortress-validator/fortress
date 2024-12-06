import { Locales, Plugin, Rules } from '@fortress-validator/types';

interface FormValidatorArguments {
  fallbackLocale?: string;
  locale?: string;
  locales?: Locales;
  plugins?: Plugin[];
  rules?: Rules;
}

export default FormValidatorArguments;
