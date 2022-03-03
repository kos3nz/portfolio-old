import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import Avatar from './Avatar';

type StoryAvatar = ComponentStoryObj<typeof Avatar>;

export default {
  title: 'UI/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// CSF 3.0
export const Default: StoryAvatar = {
  args: { size: 'lg', bordered: false },
};

export const Sizes: StoryAvatar = {
  render: (args) => (
    <div className="flex items-center gap-x-2">
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};
Sizes.args = {};

export const Bordered: StoryAvatar = {
  render: (args) => <Avatar {...args} />,
};
Bordered.args = {
  bordered: true,
  borderColor: 'gradient',
};

export const Initials: StoryAvatar = {
  render: (args) => (
    <div className="flex items-center gap-x-2">
      <Avatar {...args} username="John" />
      <Avatar {...args} username="Tom" />
      <Avatar {...args} username="Kei" />
    </div>
  ),
  args: {
    backgroundColor: '#0891b2',
  },
};
