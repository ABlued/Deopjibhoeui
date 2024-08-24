import { UseInput } from '../../../core/hooks/types/useInput';
import { UseTagInput } from '../../../core/hooks/types/useTagInput';

export interface UseSetTitleForm {
  submit: () => void;
  disabled: boolean;
  title: UseInput;
  tagInput: UseTagInput;
}
