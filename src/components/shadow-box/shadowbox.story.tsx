import type { Meta, StoryObj } from '@storybook/react';
import ShadowBox from './index';
import Table from '../table';

const meta: Meta<typeof ShadowBox> = {
  component: ShadowBox,
  title: 'UI/ShadowBox',
  parameters: {
    layout: 'centered',
    docs: {
      source: {
        type: 'dynamic',
        language: 'tsx',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="bg-slate-100 p-8 h-full w-full">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ShadowBox>;

export const WithText: Story = {
  args: {
    children: <p>This is a simple text inside a shadow box</p>,
  },
};

type TableData = {
  id: number;
  name: string;
  status: 'active' | 'inactive';
  progress: number;
  date: string;
};

const tableData: TableData[] = [
  { id: 1, name: 'Project A', status: 'active', progress: 75, date: '2024-03-15' },
  { id: 2, name: 'Project B', status: 'inactive', progress: 30, date: '2024-03-16' },
  { id: 3, name: 'Project C', status: 'active', progress: 100, date: '2024-03-17' },
];

export const WithTable: Story = {
  args: {
    children: (
      <Table
        columns={[
          { key: 'id', header: 'ID' },
          { key: 'name', header: 'Project Name' },
          {
            key: 'status',
            header: 'Status',
            render: (value) => (
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  value === 'active'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-red-500/20 text-red-500'
                }`}
              >
                {value}
              </span>
            ),
          },
          {
            key: 'progress',
            header: 'Progress',
            render: (value) => (
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${value}%` }} />
              </div>
            ),
          },
          {
            key: 'date',
            header: 'Date',
            render: (value) => new Date(String(value)).toLocaleDateString(),
          },
        ]}
        data={tableData}
      />
    ),
  },
};
