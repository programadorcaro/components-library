import type { Meta, StoryObj } from '@storybook/react';
import { ProgressBar, HealthBar, Loader } from '@repo/ui';

const meta = {
  title: 'Components/ProgressBar',
  component: ProgressBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 30,
    max: 100,
  },
};

export const Accent: Story = {
  args: {
    value: 60,
    max: 100,
    variant: 'accent',
  },
};

export const Success: Story = {
  args: {
    value: 100,
    max: 100,
    variant: 'success',
  },
};

const HealthBarMeta = {
  title: 'Components/HealthBar',
  component: HealthBar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HealthBar>;

export const HP: StoryObj<typeof HealthBarMeta> = {
  args: {
    type: 'hp',
    label: 'HP',
    value: 750,
    max: 1000,
  },
};

export const MP: StoryObj<typeof HealthBarMeta> = {
  args: {
    type: 'mp',
    label: 'MP',
    value: 250,
    max: 500,
  },
};

export const XP: StoryObj<typeof HealthBarMeta> = {
  args: {
    type: 'xp',
    label: 'XP',
    value: 900,
    max: 1000,
  },
};

const LoaderMeta = {
  title: 'Components/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export const Pixel: StoryObj<typeof LoaderMeta> = {
  args: {
    type: 'pixel',
  },
};

export const Dots: StoryObj<typeof LoaderMeta> = {
  args: {
    type: 'dots',
  },
};

export const Spinner: StoryObj<typeof LoaderMeta> = {
  args: {
    type: 'spinner',
  },
};
