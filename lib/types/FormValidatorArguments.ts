import { Locales, Rules } from '@fortress-validator/types';

interface FormValidatorArguments {
  customLocales?: Locales;
  customRules?: Rules;
  locale?: string;
  fallbackLocale?: string;
}

export default FormValidatorArguments;
