import { useCallback } from 'react';
import { SelectionState } from '../../../core/hooks/useTableSelection';
import { History } from '../types/History';
import { useHistoryStore } from './useHistory';

export const useDeleteHistory = ({
  tableSelection
}: {
  tableSelection: SelectionState<History>;
}) => {
  const { deleteHistoriesByID, deleteAll } = useHistoryStore();
  const onDelete = useCallback((histories: History[]) => {
    histories.forEach((history) => {
      deleteHistoriesByID(history.id);
      tableSelection.onSelectedItem(false, history);
    });
  }, []);

  const onDeleteAll = useCallback(() => {
    tableSelection.clearSelections();
    deleteAll();
  }, []);

  return {
    onDelete,
    onDeleteAll
  };
};
