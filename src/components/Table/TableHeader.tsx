import { HeaderGroup, flexRender } from '@tanstack/react-table';
import { cn } from '../../core/utils/classname/cn';

function TableHeader<T>({ tableHeader }: { tableHeader: HeaderGroup<T>[] }) {
  return (
    <thead className="table-header-title uppercase bg-table-column dark:bg-gray-700 dark:text-gray-400">
      {tableHeader.map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header, index) => (
            <th
              key={header.id}
              className={`flex-2 w-[30%] bg-column-main p-[10px] border-[lightgray] border-y-[1px] text-center ${cn(
                index !== headerGroup.headers.length - 1 && 'border-r-[1px]',
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
  );
}

export default TableHeader;
