import { useRef, useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import Input from './Input';
import type { InputProps } from './Input';
import clsx from 'clsx';

export type InputPasswordProps = Omit<
  InputProps,
  'type' | 'ContentRight' | 'ref'
>;

export const InputPassword = ({
  name = 'password',
  disabled,
  ...props
}: InputPasswordProps) => {
  const [type, setType] = useState<'password' | 'text'>('password');
  const showButtonRef = useRef<HTMLButtonElement>(null);

  const showPassword = () => {
    if (type === 'password') {
      setType('text');
    } else {
      setType('password');
    }
    window.requestAnimationFrame(() => {
      showButtonRef?.current?.focus();
    });
  };

  const ShowPasswordIcon = ({ className }: { className: string }) => (
    <button
      type="button"
      ref={showButtonRef}
      className={clsx('group outline-none', { 'cursor-not-allowed': disabled })}
      onClick={showPassword}
      disabled={disabled}
      title={type === 'password' ? `Show ${name}` : `Hide ${name}`}
      aria-label={type === 'password' ? `Show ${name}` : `Hide ${name}`}
    >
      {type === 'password' ? (
        <AiOutlineEye
          className={clsx(
            'fill-dark/20 group-focus:fill-primary-400 dark:fill-light/50 dark:group-focus:fill-primary-300',
            className
          )}
        />
      ) : (
        <AiOutlineEyeInvisible
          className={clsx(
            'fill-dark/20 group-focus:fill-primary-400 dark:fill-light/50 dark:group-focus:fill-primary-300',
            className
          )}
        />
      )}
    </button>
  );

  return (
    <Input
      type={type}
      name={name}
      disabled={disabled}
      autoComplete="on"
      ContentRight={ShowPasswordIcon}
      {...props}
    />
  );
};
