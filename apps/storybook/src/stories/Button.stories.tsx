import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@repo/ui';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'accent', 'danger', 'success', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    animation: {
      control: 'select',
      options: ['none', 'pulse', 'shake', 'glow'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Start Game',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Continue',
  },
};

export const Accent: Story = {
  args: {
    variant: 'accent',
    children: 'Join Now',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Delete',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Confirm',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Large Button',
  },
};

export const Pulse: Story = {
  args: {
    variant: 'primary',
    animation: 'pulse',
    children: 'Pulse',
  },
};

export const Glow: Story = {
  args: {
    variant: 'accent',
    animation: 'glow',
    children: 'Glow',
  },
};

export const EightBit: Story = {
  args: {
    style8bit: true,
    children: 'PRESS A',
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    disabled: true,
    children: 'Disabled',
  },
};
