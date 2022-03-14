import clsx from 'clsx';
import React from 'react';
import { Avatar, type AvatarSizes } from 'ui/Avatar';

export type AvatarListProps = {
  /** Contains id and name, imageUrl is optional. */
  users: {
    id: string;
    name: string;
    avatarUrl?: string;
  }[];
  /** Total number of users */
  userCount?: number;
  size?: AvatarSizes;
};

/**
 * - Either pass the full list of users, or a userCount if known
 * */
export function AvatarList({ users, size, userCount }: AvatarListProps) {
  const count = userCount || users.length;

  return (
    <ul
      role="list"
      className={
        'relative m-0 inline-flex flex-row flex-nowrap items-center justify-end p-0 align-top'
      }
      aria-label="users"
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
            borderColor="white"
            className="shadow-md"
          />
        </li>
      ))}
      {count > 3 && (
        <li
          className="ml-1.5 inline-flex whitespace-nowrap text-sm text-slate-600 dark:text-slate-200"
          aria-label={`${count - 3} more user(s)`}
        >
          &#43; {count - 3}
        </li>
      )}
    </ul>
  );
}

const stacking = ['z-30', 'z-20', 'z-10'];
