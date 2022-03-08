import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Bounce } from './Bounce';

type StoryComponent = ComponentStoryObj<typeof Bounce>;

export default {
  title: 'Design System/Ui/Animation/Bounce',
  component: Bounce,
  parameters: {
    componentSubtitle: '',
  },
} as ComponentMeta<typeof Bounce>;

export const Default: StoryComponent = {};
