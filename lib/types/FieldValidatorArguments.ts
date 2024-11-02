import { Locales, Rules } from '@fortress-validator/types';

interface FormValidatorArguments {
  name: string;
  locale: string;
  fallbackLocale: string;
  locales: Locales;
  rules: Rules;
}

export default FormValidatorArguments;
