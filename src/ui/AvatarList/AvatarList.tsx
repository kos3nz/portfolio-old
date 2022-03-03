import clsx from 'clsx';
import React from 'react';
import { Avatar, type AvatarSizes } from 'ui/Avatar';

export type AvatarListProps = {
  users: {
    id: string;
    name: string;
    avatarUrl?: string;
  }[];
  size?: AvatarSizes;
} & React.ComponentPropsWithoutRef<'ul'>;

// Either pass the full list of users, or a userCount if known
export function AvatarList({
  users,
  size,
  className,
  ...props
}: AvatarListProps) {
  const count = users.length;

  return (
    <ul
      role="list"
      className={clsx(
        'relative m-0 inline-flex flex-row flex-nowrap items-center justify-end p-0 align-top',
        className
      )}
      aria-label="users"
      {...props}
    >
      {users.slice(0, 3).map(({ id, name, avatarUrl }, index) => (
        <li
          key={id}
          className={clsx('relative -ml-4 first-of-type:ml-0', stacking[index])}
        >
          <Avatar
            size={size}
            username={name}
            src={avatarUrl || ''}
            bordered
            borderColor="transparent"
          />
        </li>
      ))}
      {count > 3 && (
        <li
          className="ml-1.5 inline-flex whitespace-nowrap text-sm text-slate-500"
          aria-label={`${count - 3} more user(s)`}
        >
          &#43; {count - 3}
        </li>
      )}
    </ul>
  );
}

const stacking = ['z-30', 'z-20', 'z-10'];
