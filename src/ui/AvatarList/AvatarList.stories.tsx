import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { AvatarListProps } from '.';
import { AvatarList } from './AvatarList';

type StoryAvatar = ComponentStoryObj<typeof AvatarList>;

export default {
  title: 'Design System/Ui/AvatarList',
  component: AvatarList,
  argTypes: {
    size: {
      description:
        '3 sizes are available. Default value is "md" if any value is not passed',
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg'],
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
    {
      id: '4',
      name: 'Daniel Walker',
    },
  ],
  size: 'md',
};

export const Default: StoryAvatar = { args: { ...defaultArgs } };

export const Short: StoryAvatar = {
  args: { ...defaultArgs, users: defaultArgs.users.slice(0, 2) },
};
