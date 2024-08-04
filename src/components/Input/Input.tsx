import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ValidationResult } from '../../core/utils/types/validate';

export interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  subPlaceholder?: string;
  className?: string;
  error?: ValidationResult;
  fullWidth?: boolean;
}

function Input({
  value,
  onChange,
  placeholder,
  subPlaceholder,
  className,
  error,
  fullWidth
}: InputProps) {
  return (
    <div>
      <input
        type={'text'}
        className={twMerge(
          'pl-[0] indent-0 border-0 p-[10px 0] border-b-[1px] border-[#D9D9D9] focus:border-primary-dark focus:ring-0 placeholder:text-border-gray',
          error?.isError && 'border-error-main focus:border-error-main',
          fullWidth && 'w-full',
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div>
        {subPlaceholder && !error?.isError && (
          <p className={'text-border-gray text-xs mt-[4px]'}>
            {subPlaceholder}
          </p>
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
