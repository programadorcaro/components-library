import type { Preview } from '@storybook/react';
import '@repo/ui/styles.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0a0e27',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: '2rem',
          fontFamily: "'Press Start 2P', monospace",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
