import type { Meta, StoryObj } from '@storybook/react';
import { Badge, LevelBadge, Label } from '@repo/ui';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'NEW',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'ONLINE',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'OFFLINE',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'BUSY',
  },
};

const LevelBadgeMeta = {
  title: 'Components/LevelBadge',
  component: LevelBadge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LevelBadge>;

export const Level1: StoryObj<typeof LevelBadgeMeta> = {
  args: {
    level: 1,
    children: 'LV.1',
  },
};

export const Level2: StoryObj<typeof LevelBadgeMeta> = {
  args: {
    level: 2,
    children: 'LV.10',
  },
};

export const Level3: StoryObj<typeof LevelBadgeMeta> = {
  args: {
    level: 3,
    children: 'LV.50',
  },
};

export const Level4: StoryObj<typeof LevelBadgeMeta> = {
  args: {
    level: 4,
    children: 'LV.99',
  },
};

const LabelMeta = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export const Pink: StoryObj<typeof LabelMeta> = {
  args: {
    variant: 'pink',
    children: 'RARE',
  },
};

export const Cyan: StoryObj<typeof LabelMeta> = {
  args: {
    variant: 'cyan',
    children: 'EPIC',
  },
};

export const Yellow: StoryObj<typeof LabelMeta> = {
  args: {
    variant: 'yellow',
    children: 'LEGENDARY',
  },
};
