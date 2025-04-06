import { SelectionState } from '../../../core/hooks/useTableSelection';
import { cn } from '../../../core/utils/classname/cn';
import { Identifiable } from '../../../types/common/identifiable';
import clsx from 'clsx';

function TableCheckBox<T extends Identifiable<unknown>>({
  item,
  selection,
  isChecked
}: {
  item: T;
  selection?: SelectionState<T>;
  isChecked: boolean;
}) {
  return (
    <td
      className={cn(
        'px-6 py-4 border-[lightgray] border-b-[1px] border-r-[1px] text-center',
        clsx(isChecked && 'table-is-checked')
      )}
    >
      <input
        type="checkbox"
        checked={isChecked ?? false}
        className="w-[1.6rem] h-[1.6rem] border-2 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 "
        onChange={(e) => {
          if (selection) {
            selection.onSelectedItem(e.target.checked, item);
          }
        }}
      />
    </td>
  );
}

export default TableCheckBox;
