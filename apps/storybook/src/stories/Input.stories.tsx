import type { Meta, StoryObj } from '@storybook/react';
import { Input, Textarea, Select, Checkbox } from '@repo/ui';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter username...',
  },
};

export const Success: Story = {
  args: {
    placeholder: 'Success state',
    state: 'success',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Error state',
    state: 'error',
  },
};

const TextareaMeta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export const TextareaDefault: StoryObj<typeof TextareaMeta> = {
  args: {
    placeholder: 'Enter your message...',
    rows: 4,
  },
};

const SelectMeta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export const SelectDefault: StoryObj<typeof SelectMeta> = {
  render: () => (
    <Select>
      <option>Select character...</option>
      <option>Warrior</option>
      <option>Mage</option>
      <option>Rogue</option>
    </Select>
  ),
};

const CheckboxMeta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export const CheckboxUnchecked: StoryObj<typeof CheckboxMeta> = {
  args: {
    label: 'Accept terms',
  },
};

export const CheckboxChecked: StoryObj<typeof CheckboxMeta> = {
  args: {
    label: 'Remember me',
    defaultChecked: true,
  },
};
