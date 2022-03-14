import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Divider } from 'ui/Divider';
import { Providers } from './Providers';
import { Form } from './Form';

export const Auth = ({ animated }: AuthProps) => {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHydrated(true);
    }, 100);

    return () => {
      setHydrated(false);
    };
  }, [animated]);

  return (
    <div
      className={clsx(
        'w-full max-w-lg rounded-md border border-dark/10 bg-light/75 py-8 px-3 duration-700 dark:border-light/30 dark:bg-dark/75 sm:px-6',
        animated &&
          (hydrated ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0')
      )}
    >
      <Providers providers={['google', 'apple', 'github']} />
      <Divider text="or continue with" />
      <Form />
    </div>
  );
};

// Types
export type AuthProps = {
  animated?: boolean;
};
