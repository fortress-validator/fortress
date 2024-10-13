import { Locales, Plugin, Rules } from '@fortress-validator/types';
import FieldValidator from './FieldValidator';
import defaultLocales from './locales';
import defaultRules from './rules';
import { FormValidatorArguments } from './types';

class FormValidator {
  private locale: string = 'en';

  private fallbackLocale: string = 'en';

  private locales: Locales = {};

  private rules: Rules = {};

  constructor({
    customLocales = {},
    customRules = {},
    locale,
    fallbackLocale,
  }: FormValidatorArguments = {}) {
    this.registerLocales(customLocales);
    this.registerRules(customRules);
    if (locale) this.setLocale(locale);
    if (fallbackLocale) this.setFallbackLocale(fallbackLocale);
  }

  public getLocale(): string {
    return this.locale;
  }

  public getFallbackLocale(): string {
    return this.fallbackLocale;
  }

  public setLocale(locale: string): this {
    if (!(locale in this.locales)) {
      throw new Error(`The "${locale}" locale is not registered.`);
    }
    this.locale = locale;
    return this;
  }

  public setFallbackLocale(locale: string): this {
    if (!(locale in this.locales)) {
      throw new Error(`The "${locale}" fallback locale is not registered.`);
    }
    this.fallbackLocale = locale;
    return this;
  }

  public defineField(name: string): FieldValidator {
    return new FieldValidator({
      name,
      locale: this.locale,
      fallbackLocale: this.fallbackLocale,
      locales: this.locales,
      rules: this.rules,
    });
  }

  public registerLocales(locales: Locales): this {
    this.locales = Object.keys(defaultLocales).reduce((acc, key) => ({ ...acc, [key]: { ...defaultLocales[key], ...(locales[key] || {}) } }), {});
    return this;
  }

  public registerRules(rules: Rules): this {
    this.rules = { ...defaultRules, ...rules };
    return this;
  }

  public registerPlugin(plugin: Plugin): this {
    if (!plugin || !plugin.locales || !plugin.rules) {
      throw new Error('The plugin must have "locales" and "rules" properties.');
    }
    return this
      .registerLocales(plugin.locales)
      .registerRules(plugin.rules);
  }
}

export default FormValidator;
