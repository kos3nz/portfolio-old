import {
  AiFillApple,
  AiFillFacebook,
  AiFillGithub,
  AiOutlineGoogle,
} from 'react-icons/ai';

export type ProvidersProps = {
  providers: ProvidersType;
};

export const Providers = ({ providers = [] }: ProvidersProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold">Sign in with</h3>
      <div className="space-y-3">
        {providers.map((provider) => (
          <button
            key={provider}
            className="flex w-full items-center justify-center gap-x-2 rounded-md bg-dark/10 py-1.5 px-3 text-sm font-medium outline-none duration-200 hover:ring-2 hover:ring-primary-400 focus:ring-2 focus:ring-primary-400 dark:bg-light/10"
          >
            <span>{providersLogo[provider]} </span>
            {`Sign up with ${provider}`}
          </button>
        ))}
      </div>
    </div>
  );
};

const providersLogo = {
  apple: <AiFillApple className="h-6 w-6" />,
  google: <AiOutlineGoogle className="h-6 w-6" />,
  github: <AiFillGithub className="h-6 w-6" />,
  facebook: <AiFillFacebook className="h-6 w-6" />,
};
export type ProvidersType = (keyof typeof providersLogo)[];
