import { Table, flexRender } from '@tanstack/react-table';
import { cn } from '../../core/utils/classname/cn';
import EditTableCell from './EditTableCell';

function TableBody<T>({ table }: { table: Table<T> }) {
  const tableRow = table.getRowModel();
  return (
    <tbody className="border-b-[1px solid lightgray]">
      {tableRow.rows.map((row, rowIndex) => {
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
                {cell.column.columnDef.meta?.canEdit ? (
                  <EditTableCell
                    key={cell.id}
                    cell={cell}
                    rowIndex={rowIndex}
                    table={table}
                    validate={cell.column.columnDef.meta?.validate}
                    transform={cell.column.columnDef.meta?.transform}
                  />
                ) : (
                  flexRender(cell.column.columnDef.cell, cell.getContext())
                )}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
