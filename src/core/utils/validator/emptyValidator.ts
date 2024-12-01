import { ValidationResult } from '../types/validate';
import { EmptyTextRule } from './rules/emptyTextRule';
import { validate } from './validate';

export const emptyValidator = (text: string): ValidationResult => {
  return validate([new EmptyTextRule()], text);
};
