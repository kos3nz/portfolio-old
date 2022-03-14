import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Mesh } from './Mesh';

type StoryComponent = ComponentStoryObj<typeof Mesh>;

export default {
  title: 'Design System/Ui/Mesh',
  component: Mesh,
  parameters: {
    componentSubtitle: 'Mesh gradient at the top right',
  },
} as ComponentMeta<typeof Mesh>;

export const Default: StoryComponent = {};
