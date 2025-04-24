import Button from '../../../components/Button/Button';
import { SelectionState } from '../../../core/hooks/useTableSelection';
import { openDialog } from '../../../core/utils/dialog';
import { resultDialog } from '../dialog';
import { useDeleteHistory } from '../hooks/useDeleteHistory';
import { useHistoryStore } from '../hooks/useHistory';
import { History } from '../types/History';
import { VscTrash } from 'react-icons/vsc';

function CalculateHistoryTableManagement({
  tableSelection
}: {
  tableSelection: SelectionState<History>;
}) {
  const { onDeleteAll, onDelete } = useDeleteHistory({
    tableSelection
  });
  const { histories } = useHistoryStore();
  return (
    <div className="flex justify-end items-center gap-2 mb-3">
      <Button
        text="선택 삭제"
        size={'small'}
        variant={'error'}
        onClick={() => {
          onDelete(tableSelection.selectedItem);
        }}
        disabled={tableSelection.selectedItem.length === 0}
        className="w-auto font-bold text-[16px]"
        startIcon={() => <VscTrash />}
      />
      <Button
        text="전체 삭제"
        size={'small'}
        variant={'error'}
        onClick={() => openDialog(resultDialog.deleteAllHistory(onDeleteAll))}
        disabled={histories.length === 0}
        className="w-auto font-bold text-[16px]"
        startIcon={() => <VscTrash />}
      />
    </div>
  );
}

export default CalculateHistoryTableManagement;
