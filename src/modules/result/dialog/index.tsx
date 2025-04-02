import { BreakPoint } from '../../../types/style/breakPoint';
import AddHistory from './Content/AddHistory';
import { ResultDialogState } from './types';

export const ResultDialog: ResultDialogState = {
  addHistory: ({ maxWidth }: { maxWidth?: BreakPoint }) => {
    const dialogId = 'addHistory';
    return {
      content: () => <AddHistory dialogId={dialogId} />,
      dialogId,
      maxWidth: maxWidth ?? 'xs'
    };
  }
};
