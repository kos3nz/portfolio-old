import clsx from 'clsx';
import React from 'react';

export type AvatarProps = {
  /** Avatar falls back to the user's initial when no image is provided. */
  username: string;
  /** The URL of the Avatar's image. */
  src?: string;
  /** 3 sizes are supported. */
  size?: AvatarSizes;
  bordered?: boolean;
  borderColor?: keyof typeof borderColors;
  backgroundColor?: string;
  className?: string;
};

// JSDoc
/**
 - Use an avatar for attributing actions or content to specific users.
 - The user's name should always be present when using Avatar.
 */
export const Avatar = ({
  username,
  src,
  size = 'lg',
  bordered = false,
  borderColor = 'gradient',
  backgroundColor = '#000',
  className,
}: AvatarProps) => {
  return (
    <div
      className={clsx(
        'rounded-full',
        bordered && [
          'flex items-center justify-center',
          sizes[size].border,
          borderColors[borderColor],
        ],
        className
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
export type AvatarSizes = keyof typeof sizes;

const borderColors = {
  white: 'bg-slate-100',
  gradient: 'bg-gradient-to-r from-cyan-500 to-indigo-500',
};
