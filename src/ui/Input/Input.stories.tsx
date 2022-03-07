import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { AiOutlineUser } from 'react-icons/ai';
import { BiKey } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { Input, type InputProps } from '.';

type StoryComponent = ComponentStoryObj<typeof Input>;

export default {
  title: 'Design System/Ui/Input',
  component: Input,
  parameters: {
    componentSubtitle: '',
  },
  argTypes: {
    registration: {
      control: false,
      description: 'This is UseFormRegisterReturn type from "react-hook-form"',
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const defaultArgs: InputProps = {
  bordered: false,
  underlined: false,
  labelPlaceholder: '',
  contentLeftStyle: '',
  contentRightStyle: '',
  disabled: false,
};

export const Default: StoryComponent = {
  args: { ...defaultArgs },
  render: (args) => (
    <>
      <Input {...args} placeholder="Username" />
      <Input {...args} labelPlaceholder="Email" />
      <Input.Password {...args} labelPlaceholder="Password" />
      <Input {...args} labelPlaceholder="Disabled" disabled />
    </>
  ),
};

export const Bordered: StoryComponent = {
  args: { ...defaultArgs, bordered: true },
  render: (args) => (
    <>
      <Input {...args} placeholder="Username" />
      <Input {...args} labelPlaceholder="Email" />
      <Input.Password {...args} labelPlaceholder="Password" />
      <Input {...args} labelPlaceholder="Disabled" disabled />
    </>
  ),
};

export const Underlined: StoryComponent = {
  args: { ...defaultArgs, underlined: true },
  render: (args) => (
    <>
      <Input {...args} placeholder="Username" />
      <Input {...args} labelPlaceholder="Email" />
      <Input.Password {...args} labelPlaceholder="Password" />
      <Input {...args} labelPlaceholder="Disabled" disabled />
    </>
  ),
};

export const WithContent: StoryComponent = {
  args: { ...defaultArgs },
  render: (args) => (
    <>
      <Input
        {...args}
        placeholder="Username"
        ContentLeft={AiOutlineUser}
        contentLeftStyle="fill"
      />
      <Input
        {...args}
        labelPlaceholder="Email"
        ContentLeft={HiOutlineMail}
        contentLeftStyle="stroke"
      />
      <Input.Password
        {...args}
        labelPlaceholder="Password"
        ContentLeft={BiKey}
        contentLeftStyle="fill"
      />
      <Input
        {...args}
        labelPlaceholder="Email"
        ContentLeft={HiOutlineMail}
        contentLeftStyle="stroke"
        disabled
      />

      <Input.Password
        {...args}
        labelPlaceholder="Disabled"
        disabled
        ContentLeft={BiKey}
        contentLeftStyle="fill"
      />
    </>
  ),
};
