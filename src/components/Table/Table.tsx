import * as React from 'react';
import {
  ColumnDef,
  TableOptions,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { TableBody, TableFooter, TableHeader } from '.';
import { isEqual } from '../../core/utils/object/isEqual';
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
  const [data, _setData] = React.useState(() => [...rowData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    ...tableOptions
  });

  React.useEffect(() => {
    if (isEqual(rowData, data) === false) {
      _setData(rowData);
    }
  }, [rowData]);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-[1px solid lightgray] text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <TableHeader tableHeader={table.getHeaderGroups()} />
        <TableBody table={table} selection={selection} />
        <TableFooter tableFooter={table.getFooterGroups()} />
      </table>
      <div className="h-4" />
    </div>
  );
}

export default Table;
