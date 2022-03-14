import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import type { AvatarProps } from './Avatar';

type StoryComponent = ComponentStoryObj<typeof Avatar>;

export default {
  title: 'Design System/Ui/Avatar',
  component: Avatar,
  parameters: {
    componentSubtitle:
      'Displays an image that represents a user or organization',
  },
} as ComponentMeta<typeof Avatar>;

// CSF 3.0
const defaultArgs: AvatarProps = {
  username: 'Jon',
  size: 'lg',
  bordered: false,
};

export const Default: StoryComponent = {
  args: { ...defaultArgs },
};

export const Sizes: StoryComponent = {
  render: (args) => (
    <div className="flex items-center gap-x-2">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
  args: {
    ...defaultArgs,
  },
  parameters: {
    docs: {
      // The story now contains a description
      storyDescription: '3 sizes are available',
    },
  },
};

export const Bordered: StoryComponent = {
  render: (args) => <Avatar {...args} />,
};
Bordered.args = {
  ...defaultArgs,
  bordered: true,
  borderColor: 'gradient',
};

export const Initials: StoryComponent = {
  render: (args) => (
    <div className="flex items-center gap-x-2">
      <Avatar {...args} username="John" />
      <Avatar {...args} username="Tom" />
      <Avatar {...args} username="Kei" />
    </div>
  ),
  args: {
    ...defaultArgs,
    backgroundColor: '#0891b2',
  },
};
