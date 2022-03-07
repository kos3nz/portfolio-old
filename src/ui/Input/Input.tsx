import { forwardRef, PropsWithoutRef, RefAttributes, useState } from 'react';
import clsx from 'clsx';
import type { UseFormRegisterReturn } from 'react-hook-form';
import { InputPassword } from './InputPassword';

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      name,
      placeholder,
      labelPlaceholder,
      underlined,
      bordered,
      disabled,
      ContentLeft,
      contentLeftStyle,
      ContentRight,
      contentRightStyle,
      registration,
      ...props
    },
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    const [value, setValue] = useState('');

    return (
      <div
        className={clsx(
          'group relative flex w-full items-center rounded-md duration-200',
          {
            // Default
            'bg-dark/10 dark:bg-light/10': !underlined,
            'hover:ring-2 hover:ring-primary-400': !underlined && !disabled,
            'ring-2 ring-primary-400': !underlined && focus,
            // Bordered
            'ring-1 ring-light/30': bordered && !focus,
            // Underlined
            'rounded-none bg-transparent': underlined,
            // Disabled
            'cursor-not-allowed': disabled,
            'bg-dark/40 dark:bg-light/30': disabled && !underlined,
            // Give space when label placeholder is present
            'mt-9': labelPlaceholder,
          }
        )}
      >
        {underlined && (
          <>
            <span className="absolute bottom-0 h-[2px] w-full bg-light/40" />
            {!disabled && (
              <span
                className={clsx(
                  'absolute bottom-0 h-[2px] w-full bg-primary-400 duration-300',
                  {
                    'scale-0 group-hover:scale-100': !focus,
                    'scale-100': focus,
                  }
                )}
              />
            )}
          </>
        )}

        {ContentLeft && (
          <span className="relative z-10 ml-2 flex items-center justify-center">
            <ContentLeft
              className={clsx('h-6 w-6', contentLeftStyle, {
                'fill-light/50': !focus && contentLeftStyle?.includes('fill'),
                'fill-primary-400': focus && contentLeftStyle?.includes('fill'),
                'stroke-light/50':
                  !focus && contentLeftStyle?.includes('stroke'),
                'stroke-primary-400':
                  focus && contentLeftStyle?.includes('stroke'),
              })}
            />
          </span>
        )}

        <div className="relative flex flex-1 items-center">
          {labelPlaceholder && (
            <label
              htmlFor={name}
              className={clsx('absolute left-2 duration-200 ease-out', {
                'text-light/50': !focus,
                '-translate-y-9 scale-90 text-primary-400': focus || value,
                '-translate-x-10': (focus || value) && ContentLeft,
              })}
            >
              {labelPlaceholder}
            </label>
          )}
          <input
            ref={ref}
            name={name}
            id={name}
            type={type}
            placeholder={labelPlaceholder ? '' : placeholder}
            tabIndex={disabled ? -1 : 0}
            disabled={disabled}
            value={value}
            onFocus={() => setFocus(true)}
            className="relative w-full bg-transparent p-2 outline-none disabled:cursor-not-allowed"
            {...registration}
            onBlur={(event) => {
              setFocus(false);
              registration?.onBlur(event);
            }}
            onChange={(event) => {
              setValue(event.target.value);
              registration?.onChange(event);
            }}
            {...props}
          />

          {/* Add clearable element here*/}
          {/* <span className="absolute right-2 h-5 w-5 bg-slate-500"></span> */}
        </div>

        {ContentRight && (
          <span className="relative z-10 mr-2 flex items-center justify-center">
            <ContentRight className={clsx('h-6 w-6', contentRightStyle)} />
          </span>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

// Types
export type InputProps = Omit<
  React.ComponentPropsWithRef<'input'>,
  'children' | UsedInputProps | keyof ComponentProps
> &
  ComponentProps;

type UsedInputProps =
  | 'id'
  | 'tabIndex'
  | 'value'
  | 'onFocus'
  | 'onBlur'
  | 'onChange'
  | 'className';

type ComponentProps = {
  ContentLeft?: (props: any) => JSX.Element;
  contentLeftStyle?: string;
  ContentRight?: (props: any) => JSX.Element;
  contentRightStyle?: string;
  disabled?: boolean;
  bordered?: boolean;
  underlined?: boolean;
  labelPlaceholder?: string;
  registration?: UseFormRegisterReturn;
};

type InputComponent<T, P = {}> = React.ForwardRefExoticComponent<
  PropsWithoutRef<P> & RefAttributes<T>
> & {
  Password: typeof InputPassword;
};

export default Input as InputComponent<HTMLInputElement, InputProps>;

/* ==============================
TODO:= Input Component
  -- Clearable element
  -- Left/Right labels
  -- More color variations
  -- Make it more flexible with input types (Date, Time, etc...)
============================== */
