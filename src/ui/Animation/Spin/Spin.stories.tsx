import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Spin } from './Spin';

type StoryComponent = ComponentStoryObj<typeof Spin>;

export default {
  title: 'Design System/Ui/Animation/Spin',
  component: Spin,
  parameters: {
    componentSubtitle: '',
  },
} as ComponentMeta<typeof Spin>;

export const Default: StoryComponent = {};
