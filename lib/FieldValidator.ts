import type { Locales, Message, Messages, Rule, RuleArguments, RuleFunction, Rules } from '@fortress-validator/types';
import { formatMessage, getType, isEmpty } from '@fortress-validator/utils';
import type { Conditions, FieldValidatorArguments } from './types';

class FieldValidator {
  private name: string;

  private locale: string;

  private fallbackLocale: string;

  private locales: Locales;

  private rules: Rules;

  private ruleFunctions: Record<string, RuleFunction> = {};

  private conditions: Conditions = {};

  private shouldSkip: boolean = false;

  private appliedProtocols: Record<string, boolean> = {};

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
    this.ruleFunctions[ruleName] = ruleFunction;
    return this;
  }

  public getRuleFunctions(): RuleFunction[] {
    return Object.values(this.ruleFunctions);
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
    const ruleFunctions = this.getRuleFunctions();
    for (const ruleFunction of ruleFunctions) {
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
   * Passes if the field's value is considered accepted (i.e., "y", "yes", "on", "1", "true").
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
   * Passes if the field's length matches the specified length.
   */
  public arrayLength(length: number): this {
    return this.apply(this.arrayLength.name, { length });
  }

  /**
   * Passes if the field's length is between the specified minimum and maximum lengths.
   */
  public arrayLengthBetween(min: number, max: number): this {
    return this.apply(this.arrayLengthBetween.name, { min, max });
  }

  /**
   * Passes if the field's length is greater than the specified length.
   */
  public arrayLengthGt(length: number): this {
    return this.apply(this.arrayLengthGt.name, { length });
  }

  /**
   * Passes if the field's length is greater than or equal to the specified length.
   */
  public arrayLengthGte(length: number): this {
    return this.apply(this.arrayLengthGte.name, { length });
  }

  /**
   * Passes if the field's length is less than the specified length.
   */
  public arrayLengthLt(length: number): this {
    return this.apply(this.arrayLengthLt.name, { length });
  }

  /**
   * Passes if the field's length is less than or equal to the specified length.
   */
  public arrayLengthLte(length: number): this {
    return this.apply(this.arrayLengthLte.name, { length });
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
   * Passes if the field's value is a boolean.
   */
  public boolean(): this {
    return this.apply(this.boolean.name);
  }

  /**
   * Passes if the field's value contains all of the specified values.
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
   * Passes if the field's value matches the specified date format.
   */
  public date(format: string, strict: boolean = true): this {
    return this.apply(this.date.name, { format, strict });
  }

  /**
   * Passes if the field's value is considered declined (i.e., "n", "no", "off", "0", "false").
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
   * Passes if the field's value contains only unique items.
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
   * Passes if the field's value is a valid email address.
   */
  public email(): this {
    return this.apply(this.email.name);
  }

  /**
   * Passes if the field's value ends with the specified value.
   */
  public endsWith(value: string): this {
    return this.apply(this.endsWith.name, { value });
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
   * Passes if the field's file size matches the specified file size.
   */
  public fileSize(size: number): this {
    return this.apply(this.fileSize.name, { size });
  }

  /**
   * Passes if the field's file size is between the specified minimum and maximum file sizes.
   */
  public fileSizeBetween(min: number, max: number): this {
    return this.apply(this.fileSizeBetween.name, { min, max });
  }

  /**
   * Passes if the field's file size is greater than the specified file size.
   */
  public fileSizeGt(size: number): this {
    return this.apply(this.fileSizeGt.name, { size });
  }

  /**
   * Passes if the field's file size is greater than or equal to the specified file size.
   */
  public fileSizeGte(size: number): this {
    return this.apply(this.fileSizeGte.name, { size });
  }

  /**
   * Passes if the field's file size is less than the specified file size.
   */
  public fileSizeLt(size: number): this {
    return this.apply(this.fileSizeLt.name, { size });
  }

  /**
   * Passes if the field's file size is less than or equal to the specified file size.
   */
  public fileSizeLte(size: number): this {
    return this.apply(this.fileSizeLte.name, { size });
  }

  /**
   * Passes if the field's value is greater than the specified value.
   */
  public gt(value: number): this {
    return this.apply(this.gt.name, { value });
  }

  /**
   * Passes if the field's value is greater than or equal to the specified value.
   */
  public gte(value: number): this {
    return this.apply(this.gte.name, { value });
  }

  /**
   * Passes if the field's value starts with the "http://" protocol.
   */
  public http(): this {
    this.appliedProtocols[this.http.name] = true;
    return this.apply(this.http.name);
  }

  /**
   * Passes if the field's value starts with the "http://" or "https://" protocols.
   */
  public httpOrHttps(): this {
    this.appliedProtocols[this.http.name] = true;
    this.appliedProtocols[this.https.name] = true;
    return this.apply(this.httpOrHttps.name);
  }

  /**
   * Passes if the field's value starts with the "https://" protocol.
   */
  public https(): this {
    this.appliedProtocols[this.https.name] = true;
    return this.apply(this.https.name);
  }

  /**
   * Passes if the field's value is an integer.
   */
  public integer(): this {
    return this.apply(this.integer.name);
  }

  /**
   * Passes if the field's value is a valid IP address.
   */
  public ip(): this {
    const includeProtocol = Object.keys(this.appliedProtocols).length > 0;
    return this.apply(this.ip.name, { includeProtocol });
  }

  /**
   * Passes if the field's value is a valid IPv4 address.
   */
  public ipv4(): this {
    const includeProtocol = Object.keys(this.appliedProtocols).length > 0;
    return this.apply(this.ipv4.name, { includeProtocol });
  }

  /**
   * Passes if the field's value is a valid IPv6 address.
   */
  public ipv6(): this {
    const includeProtocol = Object.keys(this.appliedProtocols).length > 0;
    return this.apply(this.ipv6.name, { includeProtocol });
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
   * Passes if the field's value contains only lowercase characters.
   */
  public lowercase(): this {
    return this.apply(this.lowercase.name);
  }

  /**
   * Passes if the field's value is less than the specified value.
   */
  public lt(value: number): this {
    return this.apply(this.lt.name, { value });
  }

  /**
   * Passes if the field's value is less than or equal to the specified value.
   */
  public lte(value: number): this {
    return this.apply(this.lte.name, { value });
  }

  /**
   * Passes if the field's value does not contain all of the specified values together.
   */
  public notContainsAll(values: unknown[]): this {
    return this.apply(this.notContainsAll.name, { values });
  }

  /**
   * Passes if the field's value does not contain any of the specified values.
   */
  public notContainsAny(values: unknown[]): this {
    return this.apply(this.notContainsAny.name, { values });
  }

  /**
   * Passes if the field's value does not end with the specified value.
   */
  public notEndsWith(value: string): this {
    return this.apply(this.notEndsWith.name, { value });
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
  public notOneOf(values: string[]): this {
    return this.apply(this.notOneOf.name, { values });
  }

  /**
   * Passes if the field's value does not start with the specified value.
   */
  public notStartsWith(value: string): this {
    return this.apply(this.notStartsWith.name, { value });
  }

  /**
   * Passes if the field's value does not start with a number.
   */
  public notStartsWithNumber(): this {
    return this.apply(this.notStartsWithNumber.name);
  }

  /**
   * Passes if the field's value is not a subset of the specified values.
   */
  public notSubsetOf(values: string[]): this {
    return this.apply(this.notSubsetOf.name, { values });
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
   * Passes if the field's value is an object.
   */
  public object(): this {
    return this.apply(this.object.name);
  }

  /**
   * Passes if the field's value is one of the specified values.
   */
  public oneOf(values: unknown[]): this {
    return this.apply(this.oneOf.name, { values });
  }

  /**
   * Passes if the field's value starts with the specified protocol.
   */
  public protocol(protocol: string | string[]): this {
    const values = Array.isArray(protocol) ? protocol : [protocol];
    values.forEach(value => (this.appliedProtocols[value] = true));
    return this.apply(this.protocol.name, { values });
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
   * Passes if the field's value is not empty when the specified condition is true.
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
   * Passes if the field's value starts with the specified value.
   */
  public startsWith(value: string): this {
    return this.apply(this.startsWith.name, { value });
  }

  /**
   * Passes if the field's value starts with a number.
   */
  public startsWithNumber(): this {
    return this.apply(this.startsWithNumber.name);
  }

  /**
   * Passes if the field's value is a string.
   */
  public string(): this {
    return this.apply(this.string.name);
  }

  /**
   * Passes if the field's value contains all of the specified text.
   */
  public stringContainsAll(values: string[]): this {
    return this.apply(this.stringContainsAll.name, { values });
  }

  /**
   * Passes if the field's value contains at least one of the specified text.
   */
  public stringContainsAny(values: string[]): this {
    return this.apply(this.stringContainsAny.name, { values });
  }

  /**
   * Passes if the field's string length matches the specified string length.
   */
  public stringLength(length: number): this {
    return this.apply(this.stringLength.name, { length });
  }

  /**
   * Passes if the field's string length is between the specified minimum and maximum string lengths.
   */
  public stringLengthBetween(min: number, max: number): this {
    return this.apply(this.stringLengthBetween.name, { min, max });
  }

  /**
   * Passes if the field's string length is greater than the specified string length.
   */
  public stringLengthGt(length: number): this {
    return this.apply(this.stringLengthGt.name, { length });
  }

  /**
   * Passes if the field's string length is greater than or equal to the specified string length.
   */
  public stringLengthGte(length: number): this {
    return this.apply(this.stringLengthGte.name, { length });
  }

  /**
   * Passes if the field's string length is less than the specified string length.
   */
  public stringLengthLt(length: number): this {
    return this.apply(this.stringLengthLt.name, { length });
  }

  /**
   * Passes if the field's string length is less than or equal to the specified string length.
   */
  public stringLengthLte(length: number): this {
    return this.apply(this.stringLengthLte.name, { length });
  }

  /**
   * Passes if the field's value does not contain all of the specified text together.
   */
  public stringNotContainsAll(values: string[]): this {
    return this.apply(this.stringNotContainsAll.name, { values });
  }

  /**
   * Passes if the field's value does not contain any of the specified text.
   */
  public stringNotContainsAny(values: string[]): this {
    return this.apply(this.stringNotContainsAny.name, { values });
  }

  /**
   * Passes if the field's value is a subset of the specified values.
   */
  public subsetOf(values: string[]): this {
    return this.apply(this.subsetOf.name, { values });
  }

  /**
   * Passes if the field's value does not exist in the provided values.
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
