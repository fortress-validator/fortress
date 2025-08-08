# Fortress Validator

A powerful and flexible form validation library, built to validate inputs through method chaining, with support for custom plugins.

## Getting Started

### Using with ES Modules

To get started with ES Modules, simply import the module and use it in your code:

```js
import { FormValidator } from '@fortress-validator/fortress';

const validator = new FormValidator();
```

### Using with UMD Modules

Alternatively, if you're using UMD modules, include the script in your HTML file and use it in your code:

```html
<script src="https://unpkg.com/@fortress-validator/fortress/dist/index.umd.js"></script>
<script>
const validator = new window.Fortress.FormValidator();
</script>
```

## Usage

### Basic Validation

The `defineField` method sets up a field for validation, allowing you to chain validation rules like `required` and others to validate the input.

```js
document.querySelector('input').addEventListener('input', (e) => {
  const result = validator
    .defineField('Input')
    .required()
    .alphaDash()
    .validate(e.target.value);

  console.log(result);
});
```

### Conditional Validation

The `when` method allows you to conditionally apply validation rules like `required` and others based on specific conditions.

```js
const result = validator
  .defineField('Input')
  .when({
    alphaDash: false,
  })
  .required()
  .alphaDash()
  .validate('@');

// Result:
// true
```

## Available Rules

| Name | Description |
| --- | --- |
| `accepted` | Passes if the field's value is considered accepted (i.e., "y", "yes", "on", "1", "true"). |
| `after` | Passes if the field's value is a date that occurs after the specified date. |
| `alpha` | Passes if the field's value contains only letters. |
| `alphaDash` | Passes if the field's value contains only letters, numbers, dashes and underscores. |
| `alphaDashDot` | Passes if the field's value contains only letters, numbers, dashes, underscores and dots. |
| `alphaNum` | Passes if the field's value contains only letters and numbers. |
| `array` | Passes if the field's value is an array. |
| `arrayLength` | Passes if the field's length matches the specified length. |
| `arrayLengthBetween` | Passes if the field's length is between the specified minimum and maximum lengths. |
| `arrayLengthGt` | Passes if the field's length is greater than the specified length. |
| `arrayLengthGte` | Passes if the field's length is greater than or equal to the specified length. |
| `arrayLengthLt` | Passes if the field's length is less than the specified length. |
| `arrayLengthLte` | Passes if the field's length is less than or equal to the specified length. |
| `ascii` | Passes if the field's value contains only ASCII characters and symbols. |
| `before` | Passes if the field's value is a date that occurs before the specified date. |
| `between` | Passes if the field's value is between the specified minimum and maximum values. |
| `boolean` | Passes if the field's value is a boolean. |
| `containsAll` | Passes if the field's value contains all of the specified values. |
| `containsAny` | Passes if the field's value contains at least one of the specified values. |
| `date` | Passes if the field's value matches the specified date format. |
| `declined` | Passes if the field's value is considered declined (i.e., "n", "no", "off", "0", "false"). |
| `different` | Passes if the field's value is different from the specified value in the given field. |
| `distinct` | Passes if the field's value contains only unique items. |
| `domain` | Passes if the field's value is a valid domain. |
| `email` | Passes if the field's value is a valid email address. |
| `endsWith` | Passes if the field's value ends with the specified value. |
| `equals` | Passes if the field's value is equal to the specified value. |
| `file` | Passes if the field's value is a file. |
| `fileSize` | Passes if the field's file size matches the specified file size. |
| `fileSizeBetween` | Passes if the field's file size is between the specified minimum and maximum file sizes. |
| `fileSizeGt` | Passes if the field's file size is greater than the specified file size. |
| `fileSizeGte` | Passes if the field's file size is greater than or equal to the specified file size. |
| `fileSizeLt` | Passes if the field's file size is less than the specified file size. |
| `fileSizeLte` | Passes if the field's file size is less than or equal to the specified file size. |
| `gt` | Passes if the field's value is greater than the specified value. |
| `gte` | Passes if the field's value is greater than or equal to the specified value. |
| `http` | Passes if the field's value starts with the "http://" protocol. |
| `httpOrHttps` | Passes if the field's value starts with the "http://" or "https://" protocols. |
| `https` | Passes if the field's value starts with the "https://" protocol. |
| `integer` | Passes if the field's value is an integer. |
| `ip` | Passes if the field's value is a valid IP address. |
| `ipv4` | Passes if the field's value is a valid IPv4 address. |
| `ipv6` | Passes if the field's value is a valid IPv6 address. |
| `iso8601` | Passes if the field's value is a valid ISO 8601 date. |
| `json` | Passes if the field's value is a valid JSON string. |
| `jsonSchema` | Passes if the field's value matches the specified JSON schema. |
| `lowercase` | Passes if the field's value contains only lowercase characters. |
| `lt` | Passes if the field's value is less than the specified value. |
| `lte` | Passes if the field's value is less than or equal to the specified value. |
| `notContainsAll` | Passes if the field's value does not contain all of the specified values together. |
| `notContainsAny` | Passes if the field's value does not contain any of the specified values. |
| `notEndsWith` | Passes if the field's value does not end with the specified value. |
| `notEquals` | Passes if the field's value is not equal to the specified value. |
| `notOneOf` | Passes if the field's value is not one of the specified values. |
| `notStartsWith` | Passes if the field's value does not start with the specified value. |
| `notStartsWithNumber` | Passes if the field's value does not start with a number. |
| `notSubsetOf` | Passes if the field's value is not a subset of the specified values. |
| `number` | Passes if the field's value is a number. |
| `numeric` | Passes if the field's value contains only numeric characters. |
| `object` | Passes if the field's value is an object. |
| `oneOf` | Passes if the field's value is one of the specified values. |
| `protocol` | Passes if the field's value starts with the specified protocol. |
| `regex` | Passes if the field's value matches the specified regular expression. |
| `required` | Passes if the field's value is not empty. |
| `requiredWhen` | Passes if the field's value is not empty when the specified condition is true. |
| `same` | Passes if the field's value is the same as the specified value in the given field. |
| `size` | Passes if the field's value matches the specified size. |
| `startsWith` | Passes if the field's value starts with the specified value. |
| `startsWithNumber` | Passes if the field's value starts with a number. |
| `string` | Passes if the field's value is a string. |
| `stringContainsAll` | Passes if the field's value contains all of the specified text. |
| `stringContainsAny` | Passes if the field's value contains at least one of the specified text. |
| `stringLength` | Passes if the field's string length matches the specified string length. |
| `stringLengthBetween` | Passes if the field's string length is between the specified minimum and maximum string lengths. |
| `stringLengthGt` | Passes if the field's string length is greater than the specified string length. |
| `stringLengthGte` | Passes if the field's string length is greater than or equal to the specified string length. |
| `stringLengthLt` | Passes if the field's string length is less than the specified string length. |
| `stringLengthLte` | Passes if the field's string length is less than or equal to the specified string length. |
| `stringNotContainsAll` | Passes if the field's value does not contain all of the specified text together. |
| `stringNotContainsAny` | Passes if the field's value does not contain any of the specified text. |
| `subsetOf` | Passes if the field's value is a subset of the specified values. |
| `unique` | Passes if the field's value does not exist in the provided values. |
| `uppercase` | Passes if the field's value contains only uppercase characters. |
| `url` | Passes if the field's value is a valid URL. |

## Available Methods

| Name | Description |
| --- | --- |
| `collect` | Collects the rule functions. |
| `validate` | Validates the field's value. |
| `apply` | Applies the specified rule with the given arguments, useful for applying custom rules. |
| `when` | Determines whether to apply or skip validation based on the provided conditions. |

## Available Plugins

- [fortress-validator/plugin-date](https://github.com/fortress-validator/plugin-date)
- [fortress-validator/plugin-json-schema](https://github.com/fortress-validator/plugin-json-schema)

## Custom Plugin

A custom plugin is composed of `rules` and `locales`, allowing you to define custom validation logic and locale-specific messages.

```js
const validator = new FormValidator({
  plugins: [
    {
      rules: {
        multipleOf: (({ factor }: { factor: number }) => (input: unknown) => Number(input) % factor === 0) as Rule<unknown>,
      },
      locales: {
        en: {
          multipleOf: (field, args) => {
            const { factor } = args as { factor: number };
            return `The ${field} field must be a multiple of ${factor}.`;
          },
        },
      },
    },
  ],
});

const result = validator
  .defineField('Input')
  .apply('multipleOf', { factor: 2 })
  .validate(1);

// Result:
// The input field must be a multiple of 2.
```

## Development

To start a local development server, run:

```bash
npm run dev
```

## Testing

To run the tests for this package, run:

```bash
npm run test
```

## Contributors

<a href="https://github.com/memochou1993">
  <img src="https://github.com/memochou1993.png" width="60px;" alt="memochou1993" />
</a>
<a href="https://github.com/clover180120">
  <img src="https://github.com/clover180120.png" width="60px;" alt="clover180120" />
</a>
<a href="https://github.com/Joyining">
  <img src="https://github.com/Joyining.png" width="60px;" alt="Joyining" />
</a>
<a href="https://github.com/BelleShih">
  <img src="https://github.com/BelleShih.png" width="60px;" alt="BelleShih" />
</a>
