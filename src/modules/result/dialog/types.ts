import { DialogState } from '../../../core/utils/types/dialog';
import { BreakPoint } from '../../../types/style/breakPoint';

export interface ResultDialogState {
  addHistory: (props: { maxWidth?: BreakPoint }) => DialogState;
}
