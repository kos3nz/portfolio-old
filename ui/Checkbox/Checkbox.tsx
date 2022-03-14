import clsx from 'clsx';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

export const Checkbox = ({
  defaultChecked,
  label,
  disabled,
  line,
  lightingEffect,
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked || disabled || false);

  return (
    <div className={'group relative flex max-w-max items-center gap-2'}>
      <input
        id={label}
        aria-label={label}
        type="checkbox"
        onChange={(event) => setChecked(event.target.checked)}
        disabled={disabled}
        hidden
      />
      {lightingEffect && (
        <div
          className={clsx(
            'duration-30000 absolute -left-[1.5px] flex h-5 w-5 items-center justify-center rounded-md blur-sm transition',
            {
              'scale-50 bg-transparent opacity-0': !checked,
              'scale-100 bg-primary-500 opacity-100': checked,
            }
          )}
        />
      )}
      <button
        type="button"
        role="checkbox"
        aria-checked
        aria-label={label || 'check'}
        title={label}
        disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        className={clsx(
          'relative flex h-[18px] w-[18px] items-center justify-center rounded-md outline-none ring-1 ring-dark/20 duration-200 dark:ring-light/40',
          'group-hover:ring-2 group-hover:ring-primary-400 disabled:group-hover:ring-light/40 dark:group-hover:ring-primary-300 ',
          'focus:ring-2 focus:ring-primary-400 dark:focus:ring-primary-300',
          {
            'bg-transparent': !checked,
            'bg-primary-500': checked,
            'cursor-not-allowed opacity-70': disabled,
          }
        )}
        onClick={() => setChecked((checked) => !checked)}
      >
        <FiCheck
          className={clsx(
            'h-[14px] w-[14px] stroke-light transition duration-300',
            {
              'scale-50 opacity-0': !checked,
              'scale-100': checked || disabled,
              'opacity-100': checked,
              'opacity-70': disabled,
            }
          )}
        />
      </button>
      {label && (
        <label
          htmlFor={label}
          aria-label={label}
          className={clsx('text-sm font-semibold', {
            'cursor-pointer text-dark/80 dark:text-light/90 ': !(
              (line && checked) ||
              disabled
            ),
            'text-dark/30 dark:text-light/50': (line && checked) || disabled,
            'line-through': line && checked,
            'cursor-not-allowed': disabled,
          })}
        >
          {label}
        </label>
      )}
    </div>
  );
};

// Types
export type CheckboxProps = {
  defaultChecked?: boolean;
  label?: string;
  disabled?: boolean;
  line?: boolean;
  lightingEffect?: boolean;
};
