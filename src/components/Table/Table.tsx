import * as React from 'react';
import {
  ColumnDef,
  TableOptions,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { TableBody, TableFooter, TableHeader } from '.';
import { SelectionState } from '../../core/hooks/useTableSelection';
import { Identifiable } from '../../types/common/identifiable';

function Table<T extends Identifiable<unknown>>({
  rowData,
  columns,
  tableOptions,
  selection
}: {
  rowData: T[];
  columns: ColumnDef<T, any>[];
  tableOptions?: Partial<TableOptions<T>>;
  selection?: SelectionState<T>;
}) {
  const table = useReactTable({
    data: rowData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...tableOptions
  });

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-[1px solid lightgray] text-left rtl:text-right  ">
        <TableHeader tableHeader={table.getHeaderGroups()} />
        <TableBody table={table} selection={selection} />
        <TableFooter tableFooter={table.getFooterGroups()} />
      </table>
      <div className="h-4" />
    </div>
  );
}

export default Table;
