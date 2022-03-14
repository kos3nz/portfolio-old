import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Checkbox, type CheckboxProps } from './Checkbox';

type StoryComponent = ComponentStoryObj<typeof Checkbox>;

export default {
  title: 'Design System/Ui/Checkbox',
  component: Checkbox,
  parameters: {
    componentSubtitle: '',
  },
} as ComponentMeta<typeof Checkbox>;

const defaultArgs: CheckboxProps = {
  defaultChecked: false,
  disabled: false,
  label: '',
  line: false,
  lightingEffect: false,
};

export const Default: StoryComponent = { args: { ...defaultArgs } };

export const Checked: StoryComponent = {
  args: { ...defaultArgs, defaultChecked: true },
  render: (args) => (
    <div className="space-y-4">
      <Checkbox {...args} />
      <Checkbox {...args} label="Do the dishes" />
      <Checkbox {...args} label="Work out" line />
      <Checkbox {...args} lightingEffect label="With lighting effect" />
    </div>
  ),
};

export const Disabled: StoryComponent = {
  args: { ...defaultArgs, disabled: true },
  render: (args) => (
    <div className="space-y-4">
      <Checkbox {...args} />
      <Checkbox {...args} label="Do the dishes" />
      <Checkbox {...args} label="Work out" line />
    </div>
  ),
};
