import { AiFillLock } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { Input } from 'ui/Input';
import { Checkbox } from 'ui/Checkbox';
import { useValidations } from 'hooks';
import { useContext, useState } from 'react';
import { FormContext } from '../Form';
import { Animation } from 'ui/Animation';
import { sleep } from 'utils/functions';

export const SignIn = ({}: SignInProps) => {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error('SignIn must be used within Form component');
  }

  const [status, setStatus] = useState<'idle' | 'loading' | 'completed'>(
    'idle'
  );
  const loading = status === 'loading';
  const completed = status === 'completed';

  const {
    methods: {
      handleSubmit,
      formState: { errors },
    },
    validations: { emailRegistration, passwordRegistration },
  } = useValidations(
    ['email', 'password']
    // { mode: 'onBlur' }
  );

  const onSubmit = handleSubmit(async ({ email, password }) => {
    console.log({ email });
    console.log({ password });
    try {
      setStatus('loading');

      // do something
      await sleep(2000);

      setStatus('completed');
    } catch (error) {
      // set error state and show the bottom of the component
    } finally {
      // set status idle
    }
  });

  return (
    <form onSubmit={onSubmit}>
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

      <div className="mt-6 flex items-center justify-between">
        <Checkbox label="Remember me" />
        <button
          type="button"
          aria-label="Switch to reset password"
          title="Switch to reset password"
          className="button-link"
        >
          Forgot your password?
        </button>
      </div>

      <div className="mt-6">
        <button
          type="submit"
          aria-label="Sign in"
          title="CTA"
          className="cta-button"
        >
          {loading ? (
            <Animation.Spin />
          ) : completed ? (
            <>
              <span>Success!</span>
            </>
          ) : (
            <>
              <AiFillLock className="h-5 w-5 fill-light/90" />
              <span>Sign in</span>
            </>
          )}
        </button>
      </div>

      <div className="mt-6 flex flex-col items-center space-y-2">
        <button
          type="button"
          aria-label="Switch to sign in with magic link"
          title="Switch to sign in with magic link"
          className="button-link"
        >
          Sign in with magic link
        </button>
        <button
          type="button"
          aria-label="Switch to sign up"
          title="Switch to sign up"
          className="button-link"
          onClick={() => context.setAuth('signUp')}
        >
          Don&apos;t have an account? Sign up
        </button>
      </div>
    </form>
  );
};

// Types
export type SignInProps = {};
