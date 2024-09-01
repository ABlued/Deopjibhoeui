import { ValidationResult, ValidationRule } from '../../types/validate';

export class EmptyTextRule implements ValidationRule<string> {
  validate(target: string): ValidationResult {
    return { isError: target.length === 0, message: '필수 항목입니다.' };
  }
}
