import { BreakPoint } from '../../../types/style/breakPoint';

export interface HasDialogId {
  dialogId: string;
}

export interface DialogState extends HasDialogId {
  content: () => React.ReactNode;
  maxWidth?: BreakPoint;
}
