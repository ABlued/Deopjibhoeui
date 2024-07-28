import { ValidationResult } from '../types/validate';
import { EmptyTextRule } from './rules/emptyTextRule';
import { validate } from './validate';

export const titleValidator = (text: string): ValidationResult => {
  const message = '';
  return validate([new EmptyTextRule()], text);
};
