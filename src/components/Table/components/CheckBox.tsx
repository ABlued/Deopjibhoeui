import { SelectionState } from '../../../core/hooks/useTableSelection';
import { Identifiable } from '../../../types/common/identifiable';

function TableCheckBox<T extends Identifiable<unknown>>({
  item,
  selection
}: {
  item: T;
  selection?: SelectionState<T>;
}) {
  const isChecked = !!selection?.selectedItem.find((s) => s.id === item.id);
  return (
    <td className="px-6 py-4 border-[lightgray] border-b-[1px] border-r-[1px] text-center">
      <input
        type="checkbox"
        checked={isChecked ?? false}
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
