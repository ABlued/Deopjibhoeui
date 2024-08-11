import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ValidationResult } from '../../core/utils/types/validate';
import SubPlaceholder from './SubPlaceholder';

export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  subPlaceholder?: string;
  className?: string;
  error?: ValidationResult;
  fullWidth?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

function Input({
  value,
  onChange,
  placeholder,
  subPlaceholder,
  className,
  error,
  fullWidth,
  inputProps
}: InputProps) {
  return (
    <div>
      <input
        type={'text'}
        className={twMerge(
          'pl-[0] indent-0 border-0 p-[10px 0] border-b-[1px] border-border-gray focus:border-primary-dark focus:ring-0 placeholder:text-border-gray',
          error?.isError && 'border-error-main focus:border-error-main',
          fullWidth && 'w-full',
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...inputProps}
      />
      <div>
        {subPlaceholder && !error?.isError && (
          <SubPlaceholder text={subPlaceholder} />
        )}
        <p
          className={twMerge(
            'text-error-main text-xs mt-[4px] h-[1rem]',
            error?.isError ? 'visible' : 'invisible'
          )}
        >
          {error?.message ?? ''}
        </p>
      </div>
    </div>
  );
}

export default Input;
