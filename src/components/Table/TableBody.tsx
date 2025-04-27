import { Table, flexRender } from '@tanstack/react-table';
import { cn } from '../../core/utils/classname/cn';
import EditTableCell from './EditTableCell';
import TableCheckBox from './components/CheckBox';
import { SelectionState } from '../../core/hooks/useTableSelection';
import { Identifiable } from '../../types/common/identifiable';
import clsx from 'clsx';

function TableBody<T extends Identifiable<unknown>>({
  table,
  selection
}: {
  table: Table<T>;
  selection?: SelectionState<T>;
}) {
  const tableRow = table.getRowModel();
  return (
    <tbody className="border-b-[1px solid lightgray]">
      {tableRow.rows.map((row, rowIndex) => {
        const cells = row.getVisibleCells();
        const isChecked = !!selection?.selectedItem.find(
          (s) => s.id === row.original.id
        );
        return (
          <tr key={row.id} className="bg-white border-b  dark:border-gray-700">
            {cells.map((cell, index) => {
              if (cell.column.columnDef.meta?.type === 'checkbox') {
                return (
                  <TableCheckBox
                    key={cell.id}
                    item={row.original}
                    isChecked={isChecked}
                    selection={selection}
                  />
                );
              }
              return (
                <td
                  key={cell.id}
                  className={`px-6 py-4 border-[lightgray] border-b-[1px] text-center
                    ${cn(
                      index !== cells.length - 1 && 'border-r-[1px]',
                      cell.column.columnDef.meta?.cellClassName,
                      clsx(isChecked && 'table-is-checked')
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
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBody;
