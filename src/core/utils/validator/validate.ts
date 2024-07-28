import { ValidationResult, ValidationRule } from '../types/validate';

export function validate<Type>(
  rules: ValidationRule<Type>[],
  value: Type
): ValidationResult {
  for (const rule of rules) {
    const result = rule.validate(value);
    if (result.isError) return result;
  }
  return { isError: false, message: '' };
}
