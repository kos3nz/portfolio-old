import { useContext } from 'react';
import { AiFillLock, AiOutlineUser } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { BsCheckAll } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { Input } from 'ui/Input';
import { Checkbox } from 'ui/Checkbox';
import { FormContext } from '../Form';
import { useValidations } from 'hooks';

export const SignUp = ({}: SignUpProps) => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error('SignUp must be used within Form component');
  }

  const {
    methods: {
      handleSubmit,
      formState: { errors },
    },
    validations: {
      usernameRegistration,
      emailRegistration,
      passwordRegistration,
      passwordConfirmationRegistration,
    },
  } = useValidations(['username', 'email', 'password', 'passwordConfirmation']);

  const onSubmit = handleSubmit(
    ({ username, email, password, passwordConfirmation }) => {
      console.log({ username });
      console.log({ email });
      console.log({ password });
      console.log({ passwordConfirmation });
    }
  );

  return (
    <form onSubmit={onSubmit}>
      <Input
        ContentLeft={AiOutlineUser}
        contentLeftStyle="fill"
        labelPlaceholder="Username"
        name="username"
        underlined
        registration={usernameRegistration}
      />
      {errors.username && (
        <p className="error-state">{errors.username.message}</p>
      )}
      <Input
        ContentLeft={HiOutlineMail}
        contentLeftStyle="stroke"
        labelPlaceholder="Email"
        name="email"
        underlined
        registration={emailRegistration}
      />
      {errors.email && <p className="error-state">{errors.email.message}</p>}
      <Input.Password
        ContentLeft={BiKey}
        contentLeftStyle="fill"
        labelPlaceholder="Password"
        name="password"
        underlined
        registration={passwordRegistration}
      />
      {errors.password && (
        <p className="error-state">{errors.password.message}</p>
      )}
      <Input.Password
        ContentLeft={BsCheckAll}
        contentLeftStyle="fill"
        labelPlaceholder="Password confirmation"
        name="password_confirmation"
        underlined
        registration={passwordConfirmationRegistration}
      />
      {errors.passwordConfirmation && (
        <p className="error-state">{errors.passwordConfirmation.message}</p>
      )}

      <div className="mt-6 flex items-center justify-between">
        <Checkbox label="Remember me" lightingEffect />
      </div>
      <div className="mt-6">
        <button
          type="submit"
          aria-label="Sign in"
          title="Sign in"
          className="flex w-full items-center justify-center gap-x-2 rounded-md bg-primary-500 py-2 font-semibold text-light/90 duration-200 hover:bg-primary-600"
        >
          <AiFillLock className="h-5 w-5 fill-light/90" />
          Sign in
        </button>
      </div>
      <div className="mt-6 flex flex-col items-center space-y-2">
        <button
          type="button"
          aria-label="Switch to sign up"
          title="Switch to sign up"
          className="button-link"
          onClick={() => context.setAuth('signIn')}
        >
          Already have an account? Sign in
        </button>
      </div>
    </form>
  );
};

// Types
export type SignUpProps = {};
