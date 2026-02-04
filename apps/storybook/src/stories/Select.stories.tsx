import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '@repo/ui';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Select character...',
    options: [
      { value: 'warrior', label: 'Warrior' },
      { value: 'mage', label: 'Mage' },
      { value: 'rogue', label: 'Rogue' },
      { value: 'paladin', label: 'Paladin' },
    ],
  },
};

export const WithValue: Story = {
  args: {
    placeholder: 'Select character...',
    value: 'mage',
    options: [
      { value: 'warrior', label: 'Warrior' },
      { value: 'mage', label: 'Mage' },
      { value: 'rogue', label: 'Rogue' },
      { value: 'paladin', label: 'Paladin' },
    ],
  },
};

export const ManyOptions: Story = {
  args: {
    placeholder: 'Select level...',
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `level-${i + 1}`,
      label: `Level ${i + 1}`,
    })),
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Select character...',
    disabled: true,
    options: [
      { value: 'warrior', label: 'Warrior' },
      { value: 'mage', label: 'Mage' },
      { value: 'rogue', label: 'Rogue' },
    ],
  },
};

export const WithChildren: Story = {
  render: () => (
    <Select placeholder="Select difficulty...">
      <option value="easy">Easy Mode</option>
      <option value="normal">Normal Mode</option>
      <option value="hard">Hard Mode</option>
      <option value="nightmare">Nightmare Mode</option>
    </Select>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = React.useState('');
    
    return (
      <div style={{ width: '300px' }}>
        <Select
          placeholder="Select your class..."
          value={value}
          onChange={setValue}
          options={[
            { value: 'warrior', label: '⚔️ Warrior' },
            { value: 'mage', label: '🔮 Mage' },
            { value: 'rogue', label: '🗡️ Rogue' },
            { value: 'paladin', label: '🛡️ Paladin' },
            { value: 'ranger', label: '🏹 Ranger' },
          ]}
        />
        {value && (
          <div style={{ marginTop: '16px', fontSize: '14px', color: '#00ff88' }}>
            Selected: {value}
          </div>
        )}
      </div>
    );
  },
};
