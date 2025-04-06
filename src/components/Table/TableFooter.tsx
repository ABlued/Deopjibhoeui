import { HeaderGroup, flexRender } from '@tanstack/react-table';

function TableFooter<T>({ tableFooter }: { tableFooter: HeaderGroup<T>[] }) {
  return (
    <tfoot>
      {tableFooter.map((footerGroup) => (
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
  );
}

export default TableFooter;
