import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { screen, userEvent, fireEvent } from '@storybook/testing-library';
import { sleep } from 'utils/functions';
import { Auth } from '.';

type StoryComponent = ComponentStoryObj<typeof Auth>;
type PlayStoryComponent = Omit<StoryComponent, 'play'> &
  Required<Pick<StoryComponent, 'play'>>;

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

export const Animated: StoryComponent = {
  args: { animated: true },
};

export const FilledEmail: PlayStoryComponent = {
  play: async () => {
    await sleep(500);

    const emailInput = screen.getByLabelText('email', {
      selector: 'input',
    });
    await userEvent.type(emailInput, 'example@email.com', {
      delay: 100,
    });
  },
};

export const FilledPassword: PlayStoryComponent = {
  play: async () => {
    await sleep(500);

    const passwordInput = screen.getByLabelText('password', {
      selector: 'input',
    });

    await userEvent.type(passwordInput, 'examplePassword', { delay: 100 });

    await sleep(500);

    const showPasswordBtn = screen.getByLabelText('Show password', {
      selector: 'button',
    });

    await userEvent.click(showPasswordBtn);

    await sleep(1000);

    const hidePasswordBtn = screen.getByLabelText('Hide password', {
      selector: 'button',
    });

    await userEvent.click(hidePasswordBtn);
  },
};

export const ToggleCheckbox: PlayStoryComponent = {
  play: async () => {
    await sleep(500);

    const checkbox = screen.getByLabelText('Remember me', {
      selector: 'label',
    });

    await userEvent.click(checkbox);

    await sleep(1000);

    await userEvent.click(checkbox);
  },
};

export const SubmittedForm: PlayStoryComponent = {
  play: async () => {
    await sleep(1000);

    const submit = screen.getByTitle('CTA');

    await userEvent.click(submit);
  },
};

export const ProperlySubmittedSignInForm: PlayStoryComponent = {
  play: async (context) => {
    await FilledEmail.play(context);

    await FilledPassword.play(context);

    await ToggleCheckbox.play(context);

    await SubmittedForm.play(context);
  },
};

export const WronglySubmittedSignUpForm: PlayStoryComponent = {
  play: async (context) => {
    await sleep(1000);

    const switchToSignUpBtn = screen.getByLabelText('Switch to sign up', {
      selector: 'button',
    });

    fireEvent.click(switchToSignUpBtn);

    await sleep(1000);

    const usernameInput = screen.getByLabelText('username', {
      selector: 'input',
    });
    await userEvent.type(usernameInput, 'Jo', {
      delay: 100,
    });

    await FilledEmail.play(context);

    await FilledPassword.play(context);

    await sleep(500);

    const passwordConfirmationInput = screen.getByLabelText(
      'password_confirmation',
      {
        selector: 'input',
      }
    );
    await userEvent.type(passwordConfirmationInput, 'password', {
      delay: 100,
    });

    await ToggleCheckbox.play(context);

    await SubmittedForm.play(context);
  },
};

export const ProperlySubmittedSignUpForm: PlayStoryComponent = {
  play: async (context) => {
    await sleep(1000);

    const switchToSignUpBtn = screen.getByLabelText('Switch to sign up', {
      selector: 'button',
    });

    fireEvent.click(switchToSignUpBtn);

    await sleep(1000);

    const usernameInput = screen.getByLabelText('username', {
      selector: 'input',
    });
    await userEvent.type(usernameInput, 'John Manjiro', {
      delay: 100,
    });

    await FilledEmail.play(context);

    await FilledPassword.play(context);

    await sleep(500);

    const passwordConfirmationInput = screen.getByLabelText(
      'password_confirmation',
      {
        selector: 'input',
      }
    );
    await userEvent.type(passwordConfirmationInput, 'examplePassword', {
      delay: 100,
    });

    await ToggleCheckbox.play(context);

    await SubmittedForm.play(context);
  },
};
