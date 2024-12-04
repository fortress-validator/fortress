# Fortress Validator

A powerful and flexible form validation library.

## Usage

### Using with ES Modules

Import the module and use it in your code:

```js
import { FormValidator } from '@fortress-validator/fortress';

const validator = new FormValidator();

window.onload = () => {
  document.querySelector('input').addEventListener('input', (e) => {
    const result = validator
      .defineField('Input')
      .required()
      .alphaDash()
      .validate(e.target.value);

    console.log(result);
  });
};
```

### Using with UMD Modules

Include the UMD script in your HTML file and use it:

```html
<script src="https://unpkg.com/@fortress-validator/fortress/dist/index.umd.js"></script>
<script>
const validator = new window.Fortress.FormValidator();

window.onload = () => {
  document.querySelector('input').addEventListener('input', (e) => {
    const result = validator
      .defineField('Input')
      .required()
      .alphaDash()
      .validate(e.target.value);

    console.log(result);
  });
};
</script>
```

## Rules

| Name | Description |
| --- | --- |
| `accepted` | Passes if the field's value is considered accepted (i.e., 'y', 'yes', 'on', '1', 'true'). |
| `after` | Passes if the field's value is a date that occurs after the specified date. |
| `alpha` | Passes if the field's value contains only letters. |
| `alphaDash` | Passes if the field's value contains only letters, numbers, dashes and underscores. |
| `alphaDashDot` | Passes if the field's value contains only letters, numbers, dashes, underscores and dots. |
| `alphaNum` | Passes if the field's value contains only letters and numbers. |
| `array` | Passes if the field's value is an array. |
| `ascii` | Passes if the field's value contains only ASCII characters and symbols. |
| `before` | Passes if the field's value is a date that occurs before the specified date. |
| `between` | Passes if the field's value is between the specified minimum and maximum values. |
| `boolean` | Passes if the field's value is a boolean. |
| `containsAll` | Passes if the field's value contains all the specified values. |
| `containsAny` | Passes if the field's value contains at least one of the specified values. |
| `declined` | Passes if the field's value is considered declined (i.e., 'n', 'no', 'off', '0', 'false'). |
| `different` | Passes if the field's value is different from the specified value in the given field. |
| `distinct` | Passes if all the items in the array field's value are unique. |
| `date` | Passes if the field's value matches the specified date format. |
| `email` | Passes if the field's value is a valid email address. |
| `endsWith` | Passes if the field's value ends with one of the specified values. |
| `equals` | Passes if the field's value is equal to the specified value. |
| `in` | Passes if the field's value is one of the specified values. |
| `integer` | Passes if the field's value is an integer. |
| `iso8601` | Passes if the field's value is a valid ISO 8601 date. |
| `json` | Passes if the field's value is a valid JSON string. |
| `jsonSchema` | Passes if the field's value matches the specified JSON schema. |
| `lowercase` | Passes if the field's value contains only lowercase characters. |
| `max` | Passes if the field's value does not exceed the specified maximum. |
| `min` | Passes if the field's value is at least the specified minimum. |
| `notEquals` | Passes if the field's value is not equal to the specified value. |
| `notIn` | Passes if the field's value is not one of the specified values. |
| `number` | Passes if the field's value is a number. |
| `numeric` | Passes if the field's value contains only numeric characters. |
| `regex` | Passes if the field's value matches the specified regular expression. |
| `required` | Passes if the field's value is not empty. |
| `requiredWhen` | Passes if the field's value is not empty when the specified condition is true. |
| `same` | Passes if the field's value is the same as the specified value in the given field. |
| `size` | Passes if the field's value matches the specified size. |
| `startsWith` | Passes if the field's value starts with one of the specified values. |
| `string` | Passes if the field's value is a string. |
| `unique` | Passes if the field's value contains only unique items, with optional ignored values. |
| `uppercase` | Passes if the field's value contains only uppercase characters. |
| `url` | Passes if the field's value is a valid URL. |

## Validation Methods

| Name | Description |
| --- | --- |
| `collect` | Collects the rule functions. |
| `validate` | Validates the field's value. |
| `apply` | Applies the specified rule with the given arguments. |
| `when` | Determines whether to apply or skip validation based on the provided conditions. |

## Plugins

- [fortress-validator/plugin-date](https://github.com/fortress-validator/plugin-date)
- [fortress-validator/plugin-json-schema](https://github.com/fortress-validator/plugin-json-schema)

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
