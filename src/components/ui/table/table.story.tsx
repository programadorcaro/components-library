import type { Meta, StoryObj } from '@storybook/react';
import Table from './index';

const meta = {
  title: 'UI/Table',
  component: Table,
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
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data types
type BasicData = {
  id: number;
  name: string;
  email: string;
  status: string;
};

type ComplexData = {
  id: number;
  name: string;
  status: 'active' | 'inactive';
  progress: number;
  date: string;
};

// Sample data
const basicData: BasicData[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
];

const complexData: ComplexData[] = [
  { id: 1, name: 'Project A', status: 'active', progress: 75, date: '2024-03-15' },
  { id: 2, name: 'Project B', status: 'inactive', progress: 30, date: '2024-03-16' },
  { id: 3, name: 'Project C', status: 'active', progress: 100, date: '2024-03-17' },
];

// Basic table example
export const Basic: Story = {
  args: {
    data: basicData,
    columns: [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'status', header: 'Status' },
    ],
  },
};

// Table with custom rendering
export const CustomRendering: Story = {
  args: {
    data: complexData,
    columns: [
      { key: 'id', header: 'ID' },
      { key: 'name', header: 'Project Name' },
      {
        key: 'status',
        header: 'Status',
        render: (value) => (
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              value === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'
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
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${value}%` }} />
          </div>
        ),
      },
      {
        key: 'date',
        header: 'Date',
        render: (value) => new Date(String(value)).toLocaleDateString(),
      },
    ],
  },
};

// Interactive table with row click
export const Interactive: Story = {
  args: {
    ...Basic.args,
    onRowClick: (row) => {
      alert(`Clicked row with ID: ${row.id}`);
    },
  },
};

// Empty table
export const Empty: Story = {
  args: {
    data: [],
    columns: Basic.args.columns,
  },
};

// Many columns
type ManyColumnsData = {
  id: number;
  [key: `col${number}`]: string;
};

export const ManyColumns: Story = {
  args: {
    data: [
      {
        id: 1,
        col1: 'Data 1',
        col2: 'Data 2',
        col3: 'Data 3',
        col4: 'Data 4',
        col5: 'Data 5',
        col6: 'Data 6',
        col7: 'Data 7',
        col8: 'Data 8',
      },
    ],
    columns: Array.from({ length: 8 }, (_, i) => ({
      key: `col${i + 1}` as keyof ManyColumnsData,
      header: `Column ${i + 1}`,
    })),
  },
};
