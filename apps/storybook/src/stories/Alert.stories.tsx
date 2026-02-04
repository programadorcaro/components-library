import type { Meta, StoryObj } from '@storybook/react';
import { Alert, Toast } from '@repo/ui';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: 'info',
    children: (
      <>
        <strong>Info:</strong> This is an informational message.
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: (
      <>
        <strong>Success:</strong> Your game has been saved!
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: (
      <>
        <strong>Warning:</strong> Low health detected!
      </>
    ),
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: (
      <>
        <strong>Error:</strong> Connection lost!
      </>
    ),
  },
};

const ToastMeta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export const ToastDefault: StoryObj<typeof ToastMeta> = {
  args: {
    icon: '🎮',
    children: 'New quest available!',
  },
};

export const ToastAchievement: StoryObj<typeof ToastMeta> = {
  args: {
    icon: '🏆',
    children: 'Achievement unlocked!',
  },
};
