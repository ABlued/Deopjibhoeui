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

function add(a: number, b: number) {
  // 함수의 내부를 구현하시오.
}
