import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Pulse } from './Pulse';

type StoryComponent = ComponentStoryObj<typeof Pulse>;

export default {
  title: 'Design System/Ui/Animation/Pulse',
  component: Pulse,
  parameters: {
    componentSubtitle: '',
  },
} as ComponentMeta<typeof Pulse>;

export const Default: StoryComponent = {};
