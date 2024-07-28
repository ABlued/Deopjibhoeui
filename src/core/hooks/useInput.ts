import { FunctionValidation, ValidationResult } from '../utils/types/validate';
import { useInputBase } from './useInputBase';

export const useInput = ({
  text,
  initError,
  validator
}: {
  text: string;
  initError?: ValidationResult;
  validator?: FunctionValidation<ValidationResult>;
}) => {
  const inputBase = useInputBase({
    text,
    initError: initError ?? {
      isError: false,
      message: ''
    },
    validator
  });
  return {
    ...inputBase
  };
};
