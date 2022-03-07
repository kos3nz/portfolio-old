import {
  useForm,
  UseFormRegisterReturn,
  type UseFormProps,
} from 'react-hook-form';

export const useValidations = (
  fields: (keyof ValidationFieldValue)[],
  props?: UseFormProps<ValidationFieldValue>
) => {
  const methods = useForm<ValidationFieldValue>(props);
  const { register, watch } = methods;
  const validationFields: Registrations = {};

  if (fields.includes('username')) {
    const usernameRegistration = register('username', {
      required: 'Please enter your name',
      minLength: {
        value: 3,
        message: 'Your name needs to be longer than 3 characters',
      },
    });
    Object.assign(validationFields, { usernameRegistration });
  }

  if (fields.includes('email')) {
    const emailRegistration = register('email', {
      required: 'Please enter a valid email address.',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Please enter a valid email address.',
      },
    });
    Object.assign(validationFields, { emailRegistration });
  }

  if (fields.includes('password')) {
    const passwordRegistration = register('password', {
      required: 'Please enter your password.',
      minLength: {
        value: 6,
        message: 'Password should be between 6 and 30 characters.',
      },
      maxLength: {
        value: 30,
        message: 'Password should be between 6 and 30 characters.',
      },
    });
    Object.assign(validationFields, { passwordRegistration });
  }

  if (fields.includes('passwordConfirmation')) {
    const passwordConfirmationRegistration = register('passwordConfirmation', {
      validate: (value) =>
        value === watch('password') || 'Passwords should match.',
    });
    Object.assign(validationFields, { passwordConfirmationRegistration });
  }

  return {
    methods,
    validations: {
      ...validationFields,
    },
  };
};

// Types
type ValidationFieldValue = {
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type Registrations = {
  [Key in keyof ValidationFieldValue as `${Key}Registration`]?: UseFormRegisterReturn;
};
