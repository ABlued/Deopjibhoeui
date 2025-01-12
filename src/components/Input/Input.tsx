import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ValidationResult } from '../../core/utils/types/validate';
import SubPlaceholder from './SubPlaceholder';
import InputBase from './InputBase';
import { cn } from '../../core/utils/classname/cn';

export interface InputProps<
  ChangeParams = React.ChangeEvent<HTMLInputElement>
> {
  value?: string;
  name?: string;
  onChange?: (e: ChangeParams) => void;
  placeholder?: string;
  subPlaceholder?: string;
  className?: string;
  error?: ValidationResult;
  fullWidth?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value,
      name,
      onChange,
      placeholder,
      subPlaceholder,
      className,
      error,
      fullWidth,
      inputProps
    },
    ref
  ) => {
    return (
      <div className={cn(fullWidth ? 'w-full' : 'w-[fit-content]')}>
        <InputBase
          ref={ref}
          value={value}
          name={name}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
          fullWidth={fullWidth}
          className={className}
          inputProps={inputProps}
        />
        {(subPlaceholder || error) && (
          <div>
            {subPlaceholder && !error?.message && (
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
        )}
      </div>
    );
  }
);

export default Input;
