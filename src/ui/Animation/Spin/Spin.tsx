import clsx from 'clsx';
import { ImSpinner2 } from 'react-icons/im';

export type SpinProps = {};

export const Spin = ({}: SpinProps) => {
  return (
    <ImSpinner2
      className={clsx('h-5 w-5 animate-spin fill-light/80 xs:h-6 xs:w-6')}
    />
  );
};
