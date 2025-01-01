import * as React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';
import { cn } from '../../core/utils/classname/cn';

function Table<T>({
  rowData,
  columns
}: {
  rowData: T[];
  columns: ColumnDef<T, any>[];
}) {
  const [data, _setData] = React.useState(() => [...rowData]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  React.useEffect(() => {
    _setData(rowData);
  }, [rowData]);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full border-[1px solid lightgray] text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="table-header-title uppercase bg-table-column dark:bg-gray-700 dark:text-gray-400">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className={`flex-2 w-[30%] bg-column-main p-[10px] border-[lightgray] border-y-[1px] text-center ${cn(
                    index !== headerGroup.headers.length - 1 &&
                      'border-r-[1px]',
                    header.column.columnDef.meta?.headerClassName
                  )}`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="border-b-[1px solid lightgray]">
          {table.getRowModel().rows.map((row) => {
            const cells = row.getVisibleCells();
            return (
              <tr
                key={row.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                {cells.map((cell, index) => (
                  <td
                    key={cell.id}
                    className={`px-6 py-4 border-[lightgray] border-b-[1px] text-center
                    ${cn(
                      index !== cells.length - 1 && 'border-r-[1px]',
                      cell.column.columnDef.meta?.cellClassName
                    )}
                    `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map((footerGroup) => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.footer,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
      <div className="h-4" />
    </div>
  );
}

export default Table;
