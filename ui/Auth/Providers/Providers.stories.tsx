import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Providers, ProvidersProps } from '.';

type StoryComponent = ComponentStoryObj<typeof Providers>;

export default {
  title: 'Design System/Ui/Auth/Providers',
  component: Providers,
  parameters: {
    componentSubtitle: '',
  },
  argTypes: {
    providers: {
      control: false,
      description: 'An array of providers',
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Providers>;

const defaultArgs: ProvidersProps = {
  providers: ['google'],
};

export const Default: StoryComponent = {
  args: { ...defaultArgs },
};

export const AllProviders: StoryComponent = {
  args: {
    ...defaultArgs,
    providers: ['google', 'apple', 'facebook', 'github'],
  },
};
