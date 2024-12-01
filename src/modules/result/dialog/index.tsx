import AddHistory from './Content/AddHistory';
import { ResultDialogState } from './types';

export const ResultDialog: ResultDialogState = {
  addHistory: () => {
    const dialogId = 'addHistory';
    return {
      content: () => <AddHistory dialogId={dialogId} />,
      dialogId,
      maxWidth: 'xs'
    };
  }
};
