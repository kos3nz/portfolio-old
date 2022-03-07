import '../src/styles/globals.css';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  // backgrounds: { disable: true },
  // Storybook a11y addon configuration
  a11y: {
    // the target DOM element
    element: '#root',
    // sets the execution mode for the addon
    manual: false,
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  // For tailwind class theme
  themes: {
    default: 'Dark',
    clearable: false,
    list: [
      {
        name: 'Light',
        class: [],
      },
      {
        name: 'Dark',
        // The class dark will be added to the body tag
        class: ['dark'],
      },
    ],
  },
};
/*
export const decorators = [
  (Story) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        margin: 'auto',
      }}
    >
      <Story />
    </div>
  ),
];
*/
