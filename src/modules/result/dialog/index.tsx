import { BreakPoint } from '../../../types/style/breakPoint';
import AddHistoryContent from './Content/AddHistoryContent';
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
  }
};
