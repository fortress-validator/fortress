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
| `ascii` | Passes if the field's value contains only ASCII characters and symbols. |
| `before` | Passes if the field's value is a date that occurs before the specified date. |
| `between` | Passes if the field's value is between the specified minimum and maximum values. |
| `betweenLength` | Passes if the field's value is between the specified minimum and maximum lengths. |
| `boolean` | Passes if the field's value is a boolean. |
| `containsAll` | Passes if the field's value contains all the specified values. |
| `containsAny` | Passes if the field's value contains at least one of the specified values. |
| `date` | Passes if the field's value matches the specified date format. |
| `declined` | Passes if the field's value is considered declined (i.e., "n", "no", "off", "0", "false"). |
| `different` | Passes if the field's value is different from the specified value in the given field. |
| `distinct` | Passes if all the items in the array field's value are unique. |
| `domain` | Passes if the field's value is a valid domain. |
| `email` | Passes if the field's value is a valid email address. |
| `endsWith` | Passes if the field's value ends with the specified value. |
| `equals` | Passes if the field's value is equal to the specified value. |
| `file` | Passes if the field's value is a file. |
| `fileBetweenSize` | Passes if the field's value is between the specified minimum and maximum file sizes. |
| `fileMaxSize` | Passes if the field's value is not greater than the specified maximum file size. |
| `fileMinSize` | Passes if the field's value is at least the specified minimum file size. |
| `fileSize` | Passes if the field's value matches the specified file size. |
| `http` | Passes if the field's value starts with "http://" or "https://". |
| `https` | Passes if the field's value starts with "https://". |
| `in` | Passes if the field's value is one of the specified values. |
| `integer` | Passes if the field's value is an integer. |
| `iso8601` | Passes if the field's value is a valid ISO 8601 date. |
| `json` | Passes if the field's value is a valid JSON string. |
| `jsonSchema` | Passes if the field's value matches the specified JSON schema. |
| `length` | Passes if the field's value matches the specified length. |
| `lowercase` | Passes if the field's value contains only lowercase characters. |
| `max` | Passes if the field's value is not greater than the specified maximum. |
| `maxLength` | Passes if the field's value is not greater than the specified maximum length. |
| `min` | Passes if the field's value is at least the specified minimum. |
| `minLength` | Passes if the field's value is at least the specified minimum length. |
| `notEquals` | Passes if the field's value is not equal to the specified value. |
| `notIn` | Passes if the field's value is not one of the specified values. |
| `number` | Passes if the field's value is a number. |
| `numeric` | Passes if the field's value contains only numeric characters. |
| `regex` | Passes if the field's value matches the specified regular expression. |
| `required` | Passes if the field's value is not empty. |
| `requiredWhen` | Passes if the field's value is not empty when the specified condition is true. |
| `same` | Passes if the field's value is the same as the specified value in the given field. |
| `size` | Passes if the field's value matches the specified size. |
| `startsWith` | Passes if the field's value starts with the specified value. |
| `string` | Passes if the field's value is a string. |
| `stringBetweenLength` | Passes if the field's value is between the specified minimum and maximum string lengths. |
| `stringLength` | Passes if the field's value matches the specified string length. |
| `stringMaxLength` | Passes if the field's value is not greater than the specified maximum string length. |
| `stringMinLength` | Passes if the field's value is at least the specified minimum string length. |
| `unique` | Passes if the field's value contains only unique items, with optional ignored values. |
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
