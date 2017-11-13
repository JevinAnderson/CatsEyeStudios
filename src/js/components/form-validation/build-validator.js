export const createStringLengthValidator = (min = 0, max) => (
  value,
  messages = []
) => {
  const length = value.length;

  if (length < min) {
    messages.push(`Minimum of ${min} characters is required`);
  }

  if (max && length > max) {
    messages.push(`No more than ${max} characters is allowed.`);
  }
};

export const createIsRequiredValidator = (...args) => (value, messages) => {
  if (!value) {
    messages.push('This field is required. You must provide a value for it.');
  }
};

export const isRequiredValidator = createIsRequiredValidator();

export function Validator(...args) {
  const validators = [...args];

  const validator = {};

  validator.build = () => value => {
    const messages = [];

    validators.forEach(validator => validator(value, messages));

    return messages;
  };

  validator.add = validator => {
    validators.push(validator);

    return validator;
  };

  return validator;
}
