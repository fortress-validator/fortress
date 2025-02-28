import type { Plugin } from '@fortress-validator/types';

interface FormValidatorArguments {
  fallbackLocale?: string;
  locale?: string;
  plugins?: Plugin[];
}

export default FormValidatorArguments;
