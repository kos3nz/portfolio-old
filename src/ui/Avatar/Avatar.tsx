import clsx from 'clsx';
import React from 'react';

type Props = {
  src?: string;
  username?: string;
  size?: 'sm' | 'md' | 'lg';
  bordered?: boolean;
  borderColor?: 'gradient';
  backgroundColor?: string;
};

const Avatar = ({
  src,
  username = 'K',
  size = 'lg',
  bordered = false,
  borderColor = 'gradient',
  backgroundColor = '#000',
}: Props) => {
  return (
    <div
      className={clsx(
        'rounded-full',
        bordered && [
          'flex items-center justify-center',
          sizes[size].border,
          borderColors[borderColor],
        ]
      )}
    >
      <div className={`overflow-hidden rounded-full ${sizes[size].avatar}`}>
        <img
          src={
            src ||
            `https://avatars.dicebear.com/api/initials/${username.substring(
              0,
              1
            )}.svg?background=%23${backgroundColor.slice(1)}`
          }
          alt="user"
        />
      </div>
    </div>
  );
};

export default Avatar;

const sizes = {
  sm: {
    border: 'h-9 w-9',
    avatar: 'h-8 w-8',
  },
  md: {
    border: 'h-10 w-10',
    avatar: 'h-9 w-9',
  },
  lg: {
    border: 'h-12 w-12',
    avatar: 'h-11 w-11',
  },
};

const borderColors = {
  gradient: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
};
