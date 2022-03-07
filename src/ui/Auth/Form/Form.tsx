// import dynamic from 'next/dynamic';
import {
  useState,
  createContext,
  type Dispatch,
  type SetStateAction,
} from 'react';
import { SignIn } from '../SignIn';
import { SignUp } from '../SignUp';

// const SignUp = dynamic<SignUpProps>(() =>
//   import('../SignUp').then((module) => module.SignUp)
// );

export const FormContext = createContext<FormContextProps | undefined>(
  undefined
);

export const Form = ({}: FormProps) => {
  const [auth, setAuth] = useState<AuthType>('signIn');

  return (
    <FormContext.Provider value={{ setAuth }}>
      {auth === 'signIn' && <SignIn />}
      {auth === 'signUp' && <SignUp />}
    </FormContext.Provider>
  );
};

// Types
type AuthType = 'signIn' | 'signUp' | 'magicLink' | 'resetPassword';

type FormContextProps = {
  setAuth: Dispatch<SetStateAction<AuthType>>;
};

export type FormProps = {};

/* ==============================
TODO:= Form element
  -- Customizable Button element (which can be used as button or link)
  -- Reset Password section
  -- Sign in with magic link section
============================== */
