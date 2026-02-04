import type { Meta, StoryObj } from '@storybook/react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  Button,
} from '@repo/ui';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'accent', 'danger', 'success'],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Character Card</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ fontSize: '48px' }}>👾</div>
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
          Level 42 Warrior
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="primary">
          View
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Accent: Story = {
  render: (args) => (
    <Card {...args} variant="accent">
      <CardHeader>
        <CardTitle>Quest Card</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ fontSize: '48px' }}>🎮</div>
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
          Daily Challenge
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="accent">
          Start
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const Danger: Story = {
  render: (args) => (
    <Card {...args} variant="danger">
      <CardHeader>
        <CardTitle>Boss Battle</CardTitle>
      </CardHeader>
      <CardBody>
        <div style={{ fontSize: '48px' }}>🔥</div>
        <p style={{ fontFamily: 'var(--font-pixel)', fontSize: '10px' }}>
          Final Challenge
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm" variant="danger">
          Fight
        </Button>
      </CardFooter>
    </Card>
  ),
};
