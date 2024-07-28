import React from 'react';
import { twMerge } from 'tailwind-merge';
import {
  ValidationResult,
  ValidationRule
} from '../../core/utils/types/validate';

export interface InputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  error?: ValidationResult;
}

function Input({ value, onChange, placeholder, className, error }: InputProps) {
  return (
    <div>
      <input
        type={'text'}
        className={twMerge(
          'border-0 p-[10px 0] border-b-[1px] border-[#D9D9D9] focus:border-primary-dark focus:ring-0 placeholder:text-border-gray',
          error?.isError && 'border-error-main focus:border-error-main',
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div>
        {error?.isError && (
          <p className={'text-error-main text-xs mt-[4px]'}>{error.message}</p>
        )}
      </div>
    </div>
  );
}

export default Input;
