import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Divider } from './Divider';

type StoryComponent = ComponentStoryObj<typeof Divider>;

export default {
  title: 'Design System/Ui/Divider',
  component: Divider,
  parameters: {
    // componentSubtitle: '',
  },
} as ComponentMeta<typeof Divider>;

export const Default: StoryComponent = {};

export const WithText: StoryComponent = {
  args: {
    text: 'or continue with',
  },
};
