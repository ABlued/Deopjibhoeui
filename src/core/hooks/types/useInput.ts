import { TargetValue } from '../../../types/common/targetValue';
import {
  FunctionValidation,
  ValidationResult
} from '../../utils/types/validate';

export type UseInputParams = {
  text: string;
  initError?: ValidationResult;
  validator?: FunctionValidation<ValidationResult>;
};

export interface UseInput {
  value: string;
  error: ValidationResult;
  onChange: (e: string | TargetValue<string>) => void;
  onChangeError: (value: ValidationResult) => void;
  reset: () => void;
}
