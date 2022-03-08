import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Ping } from './Ping';

type StoryComponent = ComponentStoryObj<typeof Ping>;

export default {
  title: 'Design System/Ui/Animation/Ping',
  component: Ping,
  parameters: {
    componentSubtitle: '',
  },
} as ComponentMeta<typeof Ping>;

export const Default: StoryComponent = {};
