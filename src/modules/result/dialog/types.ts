import { UseInput } from '../../../core/hooks/types/useInput';
import { UseFormResult } from '../../../core/hooks/useForm';
import { DialogState } from '../../../core/utils/types/dialog';
import { BreakPoint } from '../../../types/style/breakPoint';
import { History } from '../types/History';

export interface ResultDialogState {
  addHistory: (props: { maxWidth?: BreakPoint }) => DialogState;
  editHistory: (
    props: { maxWidth?: BreakPoint } & Partial<History>
  ) => DialogState;
}
export type HistoryFormProps = {
  form: UseFormResult<{
    purchaseDate: string;
    purchaseHistory: string;
  }>;
  buyer: string;
  cost: UseInput;
  onChangeBuyer: (value: string) => void;
  isValid: () => boolean;
};
