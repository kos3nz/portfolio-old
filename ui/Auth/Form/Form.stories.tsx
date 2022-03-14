import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Form } from '.';

type StoryComponent = ComponentStoryObj<typeof Form>;

export default {
  title: 'Design System/Ui/Auth/Form',
  component: Form,
  parameters: {
    componentSubtitle: '',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Form>;

export const SignIn: StoryComponent = {
  args: {},
};

export const SignUp: StoryComponent = {
  args: { type: 'signUp' },
};
