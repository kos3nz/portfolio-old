import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { AvatarListProps } from '.';
import { AvatarList } from './AvatarList';

type StoryComponent = ComponentStoryObj<typeof AvatarList>;

export default {
  title: 'Design System/Ui/AvatarList',
  component: AvatarList,
  parameters: {
    componentSubtitle: 'Displays a list of users',
  },
  argTypes: {
    size: {
      description:
        '3 sizes are available. Default value is "md" if any value is not passed',
    },
  },
} as ComponentMeta<typeof AvatarList>;

const defaultArgs: AvatarListProps = {
  users: [
    {
      id: '1',
      name: 'Dominic Nguyen',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
    },
    {
      id: '2',
      name: 'Tom Coleman',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/132554',
    },
    {
      id: '3',
      name: 'John Smith',
    },
  ],
  size: 'md',
};

export const Default: StoryComponent = { args: { ...defaultArgs } };

export const Short: StoryComponent = {
  args: { ...defaultArgs, users: defaultArgs.users.slice(0, 2) },
};

export const Ellipsized: StoryComponent = {
  args: {
    ...defaultArgs,
    users: [
      ...defaultArgs.users,
      {
        id: '4',
        name: 'Daniel Walker',
      },
    ],
  },
};

export const BigUserCount: StoryComponent = {
  args: {
    ...defaultArgs,
    userCount: 100,
  },
};

export const Empty: StoryComponent = {
  args: {
    users: [],
  },
};
