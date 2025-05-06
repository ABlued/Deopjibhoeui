import type { Meta, StoryObj } from '@storybook/react';
import Table from './Table';
type Story = StoryObj<typeof meta>;

const meta: Meta<typeof Table> = {
  component: Table
};

export default meta;

export const Default: Story = {
  args: {
    columns: [
      {
        id: 'Name',
        header: 'Name',
        accessorFn: (row: any) => row.name
      },
      {
        id: 'Age',
        header: 'Age',
        accessorFn: (row: any) => row.age
      },
      {
        id: 'Country',
        header: 'Country',
        accessorFn: (row: any) => row.country
      }
    ],
    rowData: [
      {
        id: 1,
        name: 'John Doe',
        age: 28,
        country: 'USA'
      },
      {
        id: 2,
        name: 'Jane Smith',
        age: 34,
        country: 'Canada'
      },
      {
        id: 3,
        name: 'Sam Brown',
        age: 22,
        country: 'UK'
      }
    ]
  }
};
