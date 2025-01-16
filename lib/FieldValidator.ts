import { Locales, Message, Messages, Rule, RuleArguments, RuleFunction, Rules } from '@fortress-validator/types';
import { formatMessage, getType, isEmpty } from '@fortress-validator/utils';
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

  public get mandatoryRules(): string[] {
    return [
      this.required.name,
      this.string.name,
      this.array.name,
      this.equals.name,
      this.notEquals.name,
    ];
  }

  public getMessage(ruleName: string): Message {
    return this.messages[ruleName] || this.fallbackMessages[ruleName] || (field => `The ${field} field is invalid.`);
  }

  public getRule(name: string): Rule<unknown> {
    if (!(name in this.rules)) {
      throw new Error(`The "${name}" rule is not registered.`);
    }
    return this.rules[name];
  }

  private buildRuleFunction(ruleName: string, args: RuleArguments): RuleFunction {
    return (input: unknown) => {
      if (isEmpty(input) && !this.mandatoryRules.includes(ruleName)) return true;
      const result = this.getRule(ruleName)(args)(input);
      if (typeof result === 'string') return result;
      if (result === true) return true;
      return this.buildRuleFunctionMessage(ruleName, args, input);
    };
  }

  private buildRuleFunctionMessage(ruleName: string, args: RuleArguments, input: unknown): string {
    const message = this.getMessage(ruleName)(this.formattedName, args);
    if (typeof message === 'object') {
      const inputType = getType(input);
      if (!(inputType in message)) {
        throw new Error(`The message for the "${ruleName}" rule of the "${inputType}" type is missing.`);
      }
      return formatMessage(message[inputType]);
    }
    return formatMessage(message);
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

  /**
   * Collects the rule functions.
   */
  public collect(): RuleFunction[] {
    return this.shouldSkip ? [] : this.getRuleFunctions();
  }

  /**
   * Validates the field's value.
   */
  public validate(value: unknown): boolean | string {
    if (this.shouldSkip) return true;
    for (const ruleFunction of this.ruleFunctions) {
      const result = ruleFunction(value);
      if (typeof result === 'string') return result;
    }
    return true;
  }

  /**
   * Applies the specified rule with the given arguments.
   */
  public apply(ruleName: string, args: RuleArguments = {}): this {
    return this.pushRuleFunction(ruleName, args);
  }

  /**
   * Passes if the field's value is considered accepted (i.e., 'y', 'yes', 'on', '1', 'true').
   */
  public accepted(): this {
    return this.apply(this.accepted.name);
  }

  /**
   * Passes if the field's value is a date that occurs after the specified date.
   */
  public after(date: string, format: string, displayFormat?: string, strict: boolean = true): this {
    return this.apply(this.after.name, { date, format, displayFormat, strict });
  }

  /**
   * Passes if the field's value contains only letters.
   */
  public alpha(): this {
    return this.apply(this.alpha.name);
  }

  /**
   * Passes if the field's value contains only letters, numbers, dashes and underscores.
   */
  public alphaDash(): this {
    return this.apply(this.alphaDash.name);
  }

  /**
   * Passes if the field's value contains only letters, numbers, dashes, underscores and dots.
   */
  public alphaDashDot(): this {
    return this.apply(this.alphaDashDot.name);
  }

  /**
   * Passes if the field's value contains only letters and numbers.
   */
  public alphaNum(): this {
    return this.apply(this.alphaNum.name);
  }

  /**
   * Passes if the field's value is an array.
   */
  public array(): this {
    return this.apply(this.array.name);
  }

  /**
   * Passes if the field's value contains only ASCII characters and symbols.
   */
  public ascii(): this {
    return this.apply(this.ascii.name);
  }

  /**
   * Passes if the field's value is a date that occurs before the specified date.
   */
  public before(date: string, format: string, displayFormat?: string, strict: boolean = true): this {
    return this.apply(this.before.name, { date, format, displayFormat, strict });
  }

  /**
   * Passes if the field's value is between the specified minimum and maximum values.
   */
  public between(min: number, max: number): this {
    return this.apply(this.between.name, { min, max });
  }

  /**
   * Passes if the field's value is between the specified minimum and maximum lengths.
   */
  public betweenLength(min: number, max: number): this {
    return this.apply(this.betweenLength.name, { min, max });
  }

  /**
   * Passes if the field's value is a boolean.
   */
  public boolean(): this {
    return this.apply(this.boolean.name);
  }

  /**
   * Passes if the field's value contains all the specified values.
   */
  public containsAll(values: unknown[]): this {
    return this.apply(this.containsAll.name, { values });
  }

  /**
   * Passes if the field's value contains at least one of the specified values.
   */
  public containsAny(values: unknown[]): this {
    return this.apply(this.containsAny.name, { values });
  }

  /**
   * Passes if the field's value is considered declined (i.e., 'n', 'no', 'off', '0', 'false').
   */
  public declined(): this {
    return this.apply(this.declined.name);
  }

  /**
   * Passes if the field's value is different from the specified value in the given field.
   */
  public different(field: string, value: unknown): this {
    return this.apply(this.different.name, { field, value });
  }

  /**
   * Passes if all the items in the array field's value are unique.
   */
  public distinct(): this {
    return this.apply(this.distinct.name);
  }

  /**
   * Passes if the field's value is a valid domain.
   */
  public domain(): this {
    return this.apply(this.domain.name);
  }

  /**
   * Passes if the field's value matches the specified date format.
   */
  public date(format: string, strict: boolean = true): this {
    return this.apply(this.date.name, { format, strict });
  }

  /**
   * Passes if the field's value is a valid email address.
   */
  public email(): this {
    return this.apply(this.email.name);
  }

  /**
   * Passes if the field's value ends with one of the specified values.
   */
  public endsWith(values: string[] | string): this {
    return this.apply(this.endsWith.name, { values });
  }

  /**
   * Passes if the field's value is equal to the specified value.
   */
  public equals(value: unknown): this {
    return this.apply(this.equals.name, { value });
  }

  /**
   * Passes if the field's value is a file.
   */
  public file(): this {
    return this.apply(this.file.name);
  }

  /**
   * Passes if the field's value is between the specified minimum and maximum file sizes.
   */
  public fileBetweenSize(min: number, max: number): this {
    return this.apply(this.fileBetweenSize.name, { min, max });
  }

  /**
   * Passes if the field's value is not greater than the specified maximum file size.
   */
  public fileMaxSize(size: number): this {
    return this.apply(this.fileMaxSize.name, { size });
  }

  /**
   * Passes if the field's value is at least the specified minimum file size.
   */
  public fileMinSize(size: number): this {
    return this.apply(this.fileMinSize.name, { size });
  }

  /**
   * Passes if the field's value matches the specified file size.
   */
  public fileSize(size: number): this {
    return this.apply(this.fileSize.name, { size });
  }

  /**
   * Passes if the field's value starts with "http://" or "https://".
   */
  public http(): this {
    return this.apply(this.http.name);
  }

  /**
   * Passes if the field's value starts with "https://".
   */
  public https(): this {
    return this.apply(this.https.name);
  }

  /**
   * Passes if the field's value is one of the specified values.
   */
  public in(values: unknown[]): this {
    return this.apply(this.in.name, { values });
  }

  /**
   * Passes if the field's value is an integer.
   */
  public integer(): this {
    return this.apply(this.integer.name);
  }

  /**
   * Passes if the field's value is a valid ISO 8601 date.
   */
  public iso8601(): this {
    return this.apply(this.iso8601.name);
  }

  /**
   * Passes if the field's value is a valid JSON string.
   */
  public json(): this {
    return this.apply(this.json.name);
  }

  /**
   * Passes if the field's value matches the specified JSON schema.
   */
  public jsonSchema(schema: Record<string, unknown>): this {
    return this.apply(this.jsonSchema.name, { schema, locale: this.locale, field: this.name });
  }

  /**
   * Passes if the field's value matches the specified length.
   */
  public length(length: number): this {
    return this.apply(this.length.name, { length });
  }

  /**
   * Passes if the field's value contains only lowercase characters.
   */
  public lowercase(): this {
    return this.apply(this.lowercase.name);
  }

  /**
   * Passes if the field's value is not greater than the specified maximum.
   */
  public max(max: number): this {
    return this.apply(this.max.name, { max });
  }

  /**
   * Passes if the field's value is not greater than the specified maximum length.
   */
  public maxLength(length: number): this {
    return this.apply(this.maxLength.name, { length });
  }

  /**
   * Passes if the field's value is at least the specified minimum.
   */
  public min(min: number): this {
    return this.apply(this.min.name, { min });
  }

  /**
   * Passes if the field's value is at least the specified minimum length.
   */
  public minLength(length: number): this {
    return this.apply(this.minLength.name, { length });
  }

  /**
   * Passes if the field's value is not equal to the specified value.
   */
  public notEquals(value: unknown): this {
    return this.apply(this.notEquals.name, { value });
  }

  /**
   * Passes if the field's value is not one of the specified values.
   */
  public notIn(values: string[]): this {
    return this.apply(this.notIn.name, { values });
  }

  /**
   * Passes if the field's value is a number.
   */
  public number(): this {
    return this.apply(this.number.name);
  }

  /**
   * Passes if the field's value contains only numeric characters.
   */
  public numeric(): this {
    return this.apply(this.numeric.name);
  }

  /**
   * Passes if the field's value matches the specified regular expression.
   */
  public regex(expression: RegExp): this {
    return this.apply(this.regex.name, { expression });
  }

  /**
   * Passes if the field's value is not empty.
   */
  public required(): this {
    return this.apply(this.required.name);
  }

  /**
   * Passes if the field's value is not empty when the specified condition is satisfied.
   */
  public requiredWhen(condition: boolean): this {
    return this
      .when({ required: condition })
      .required();
  }

  /**
   * Passes if the field's value is the same as the specified value in the given field.
   */
  public same(field: string, value: unknown): this {
    return this.apply(this.same.name, { field, value });
  }

  /**
   * Passes if the field's value matches the specified size.
   */
  public size(size: number): this {
    return this.apply(this.size.name, { size });
  }

  /**
   * Passes if the field's value starts with one of the specified values.
   */
  public startsWith(values: string[] | string): this {
    return this.apply(this.startsWith.name, { values });
  }

  /**
   * Passes if the field's value is a string.
   */
  public string(): this {
    return this.apply(this.string.name);
  }

  /**
   * Passes if the field's value is between the specified minimum and maximum string lengths.
   */
  public stringBetweenLength(min: number, max: number): this {
    return this.apply(this.stringBetweenLength.name, { min, max });
  }

  /**
   * Passes if the field's value matches the specified string length.
   */
  public stringLength(length: number): this {
    return this.apply(this.stringLength.name, { length });
  }

  /**
   * Passes if the field's value is not greater than the specified maximum string length.
   */
  public stringMaxLength(length: number): this {
    return this.apply(this.stringMaxLength.name, { length });
  }

  /**
   * Passes if the field's value is at least the specified minimum string length.
   */
  public stringMinLength(length: number): this {
    return this.apply(this.stringMinLength.name, { length });
  }

  /**
   * Passes if the field's value contains only unique items, with optional ignored values.
   */
  public unique(values: string[], ignored: unknown[] | unknown = []): this {
    return this.apply(this.unique.name, { values, ignored });
  }

  /**
   * Passes if the field's value contains only uppercase characters.
   */
  public uppercase(): this {
    return this.apply(this.uppercase.name);
  }

  /**
   * Passes if the field's value is a valid URL.
   */
  public url(): this {
    return this.apply(this.url.name);
  }

  /**
   * Determines whether to apply or skip validation based on the provided conditions.
   */
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
