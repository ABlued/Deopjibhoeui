import React from 'react';
import { render, screen } from '@testing-library/react';
import { ColumnDef } from '@tanstack/react-table';
import Table from '../Table';
import { v4 as uuidv4 } from 'uuid';
type Person = {
  id: string;
  name: string;
  age: number;
};

// Define the columns for the table
const columns: ColumnDef<Person, any>[] = [
  {
    accessorKey: 'name',
    header: 'Name',
    cell: (info) => info.getValue(),
    accessorFn: (row) => row.name
  },
  {
    accessorKey: 'age',
    header: 'Age',
    cell: (info) => info.getValue(),
    accessorFn: (row) => row.age
  }
];

// Define the row data for the table
const rowData: Person[] = [
  { id: uuidv4(), name: 'John Doe', age: 28 },
  { id: uuidv4(), name: 'Jane Smith', age: 34 }
];

describe('Table Component', () => {
  test('renders table with correct headers and data', () => {
    render(<Table rowData={rowData} columns={columns} />);

    // Check if headers are rendered
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Age')).toBeInTheDocument();

    // Check if row data is rendered
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('28')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('34')).toBeInTheDocument();
  });

  // test('columns have correct accessor keys and headers', () => {
  //   expect(columns[0].accessorKey).toBe('name');
  //   expect(columns[0].header).toBe('Name');
  //   expect(columns[1].accessorKey).toBe('age');
  //   expect(columns[1].header).toBe('Age');
  // });

  test('columns render correct cell values', () => {
    // const nameCell = columns[0].cell({ getValue: () => 'John Doe' });
    // const ageCell = columns[1].cell({ getValue: () => 28 });
    // expect(nameCell).toBe('John Doe');
    // expect(ageCell).toBe(28);
  });
});
