import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Auth } from '.';

type StoryComponent = ComponentStoryObj<typeof Auth>;

export default {
  title: 'Design System/Ui/Auth',
  component: Auth,
  parameters: {
    componentSubtitle: '',
  },
} as ComponentMeta<typeof Auth>;

export const Default: StoryComponent = {
  args: {},
};
