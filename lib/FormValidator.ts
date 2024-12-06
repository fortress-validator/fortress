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
    fallbackLocale,
    locale,
    locales,
    plugins,
    rules,
  }: FormValidatorArguments = {}) {
    this.registerLocales(defaultLocales);
    this.registerRules(defaultRules);
    if (fallbackLocale) this.setFallbackLocale(fallbackLocale);
    if (locale) this.setLocale(locale);
    if (locales) this.registerLocales(locales);
    if (plugins) plugins.forEach(plugin => this.registerPlugin(plugin));
    if (rules) this.registerRules(rules);
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
    this.locales = Object.keys(locales).reduce(
      (acc: Locales, key: string) => {
        acc[key] = { ...this.locales[key], ...locales[key] };
        return acc;
      },
      { ...this.locales },
    );
    return this;
  }

  public registerRules(rules: Rules): this {
    this.rules = { ...this.rules, ...rules };
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
