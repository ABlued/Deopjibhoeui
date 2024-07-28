export type ValidationResult = { isError: boolean; message?: string };

export type FunctionValidation<T> = (value: string) => T;

export interface ValidationRule<T> {
  validate: (target: T) => ValidationResult;
}
