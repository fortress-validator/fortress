import { Locales, Message, Messages, Rule, RuleArguments, RuleFunction, Rules } from '@fortress-validator/types';
import { formatMessage, isEmpty } from '@fortress-validator/utils';
import { Conditions, FieldValidatorArguments } from './types';

class FieldValidator {
  private name: string;

  private locale: string;

  private fallbackLocale: string;

  private locales: Locales;

  private rules: Rules;

  private ruleFunctions: RuleFunction[] = [];

  private conditions: Conditions = {};

  private shouldSkip: boolean = false;

  constructor({
    name,
    locale,
    fallbackLocale,
    locales,
    rules,
  }: FieldValidatorArguments) {
    this.name = name;
    this.locale = locale;
    this.fallbackLocale = fallbackLocale;
    this.locales = locales;
    this.rules = rules;
  }

  public get formattedName(): string {
    return this.name.toLowerCase();
  }

  public get messages(): Messages {
    return this.locales[this.locale] || {};
  }

  public get fallbackMessages(): Messages {
    return this.locales[this.fallbackLocale] || {};
  }

  public getMessage(ruleName: string): Message {
    return this.messages[ruleName] || this.fallbackMessages[ruleName] || (field => `The ${field} field is invalid.`);
  }

  public getRule(name: string): Rule<unknown> {
    if (!(name in this.rules)) {
      throw new Error(`The "${name}" rule does not exist.`);
    }
    return this.rules[name];
  }

  private buildRuleFunction(ruleName: string, args: RuleArguments): RuleFunction {
    const message = this.getMessage(ruleName)(this.formattedName, args);
    return (input: unknown) => {
      if (ruleName !== this.required.name && isEmpty(input)) return true;
      const result = this.getRule(ruleName)(args)(input);
      if (typeof result === 'string') return result;
      if (result === true) return true;
      if (typeof message === 'object') {
        const inputType = Object.prototype.toString.call(input).toLowerCase().slice(8, -1);
        if (!(inputType in message)) {
          throw new Error(`The message for the "${ruleName}" rule of the "${inputType}" type is missing.`);
        }
        return formatMessage(message[inputType]);
      }
      return formatMessage(message);
    };
  }

  private pushRuleFunction(ruleName: string, args: RuleArguments): this {
    if (ruleName in this.conditions && !this.conditions[ruleName]) return this;
    const ruleFunction = this.buildRuleFunction(ruleName, args);
    this.ruleFunctions.push(ruleFunction);
    return this;
  }

  public getRuleFunctions(): RuleFunction[] {
    return this.ruleFunctions;
  }

  public compose(): RuleFunction[] {
    return this.shouldSkip ? [] : this.getRuleFunctions();
  }

  public validate(value: unknown): boolean | string {
    if (this.shouldSkip) return true;
    for (const ruleFunction of this.ruleFunctions) {
      const result = ruleFunction(value);
      if (typeof result === 'string') return result;
    }
    return true;
  }

  public apply(ruleName: string, args: RuleArguments = {}): this {
    return this.pushRuleFunction(ruleName, args);
  }

  public accepted(): this {
    return this.apply(this.accepted.name);
  }

  public after(date: string, format: string, displayFormat?: string, strict: boolean = true): this {
    return this.apply(this.after.name, { date, format, displayFormat, strict });
  }

  public alpha(): this {
    return this.apply(this.alpha.name);
  }

  public alphaDash(): this {
    return this.apply(this.alphaDash.name);
  }

  public alphaDashDot(): this {
    return this.apply(this.alphaDashDot.name);
  }

  public alphaNum(): this {
    return this.apply(this.alphaNum.name);
  }

  public ascii(): this {
    return this.apply(this.ascii.name);
  }

  public before(date: string, format: string, displayFormat?: string, strict: boolean = true): this {
    return this.apply(this.before.name, { date, format, displayFormat, strict });
  }

  public between(min: number, max: number): this {
    return this.apply(this.between.name, { min, max });
  }

  public boolean(): this {
    return this.apply(this.boolean.name);
  }

  public declined(): this {
    return this.apply(this.declined.name);
  }

  public distinct(): this {
    return this.apply(this.distinct.name);
  }

  public date(format: string, strict: boolean = true): this {
    return this.apply(this.date.name, { format, strict });
  }

  public email(): this {
    return this.apply(this.email.name);
  }

  public endsWith(values: string[] | string): this {
    return this.apply(this.endsWith.name, { values });
  }

  public in(values: string[]): this {
    return this.apply(this.in.name, { values });
  }

  public integer(): this {
    return this.apply(this.integer.name);
  }

  public iso8601(): this {
    return this.apply(this.iso8601.name);
  }

  public json(): this {
    return this.apply(this.json.name);
  }

  public jsonSchema(schema: Record<string, unknown>): this {
    return this.apply(this.jsonSchema.name, { schema });
  }

  public lowercase(): this {
    return this.apply(this.lowercase.name);
  }

  public max(value: number): this {
    return this.apply(this.max.name, { max: value });
  }

  public min(value: number): this {
    return this.apply(this.min.name, { min: value });
  }

  public notIn(values: string[]): this {
    return this.apply(this.notIn.name, { values });
  }

  public number(): this {
    return this.apply(this.number.name);
  }

  public numeric(): this {
    return this.apply(this.numeric.name);
  }

  public regex(expression: RegExp): this {
    return this.apply(this.regex.name, { expression });
  }

  public required(): this {
    return this.apply(this.required.name);
  }

  public size(size: number): this {
    return this.apply(this.size.name, { size });
  }

  public startsWith(values: string[] | string): this {
    return this.apply(this.startsWith.name, { values });
  }

  public string(): this {
    return this.apply(this.string.name);
  }

  public unique(values: string[], ignores: unknown[] | unknown = []): this {
    return this.apply(this.unique.name, { values, ignores });
  }

  public uppercase(): this {
    return this.apply(this.uppercase.name);
  }

  public url(): this {
    return this.apply(this.url.name);
  }

  public when(conditions: boolean | Conditions): this {
    if (typeof conditions === 'object') {
      this.conditions = conditions;
      return this;
    }
    if (!conditions) {
      this.shouldSkip = true;
    }
    return this;
  }
}

export default FieldValidator;
