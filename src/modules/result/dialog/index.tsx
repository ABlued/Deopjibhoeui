import { BreakPoint } from '../../../types/style/breakPoint';
import AddHistoryContent from './Content/AddHistoryContent';
import DeleteAllHistoryContent from './Content/deleteAllHistoryContent';
import { ResultDialogState } from './types';

export const resultDialog: ResultDialogState = {
  addHistory: ({ maxWidth }: { maxWidth?: BreakPoint }) => {
    const dialogId = 'addHistory';
    return {
      content: () => <AddHistoryContent dialogId={dialogId} />,
      shouldCloseOnOverlayClick: false,
      dialogId,
      maxWidth: maxWidth ?? 'xs'
    };
  },
  editHistory: (props) => {
    const dialogId = 'editHistory';
    return {
      content: () => <AddHistoryContent dialogId={dialogId} />,
      shouldCloseOnOverlayClick: false,
      dialogId,
      maxWidth: props.maxWidth ?? 'xs'
    };
  },
  deleteAllHistory: (onDeleteAll: () => void) => {
    const dialogId = 'deleteHistory';
    return {
      maxWidth: 'xs',
      content: () => (
        <DeleteAllHistoryContent
          onDeleteAll={onDeleteAll}
          dialogId={dialogId}
        />
      ),
      dialogId
    };
  }
};
