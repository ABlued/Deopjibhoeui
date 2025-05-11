import React from 'react';
import { twMerge } from 'tailwind-merge';
import { InputProps } from './Input';

const InputBase = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    return (
      <input
        type={'text'}
        className={twMerge(
          'input-style',
          props.error?.isError && 'border-error-main focus:border-error-main',
          props.fullWidth && 'w-full',
          props.className
        )}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        name={props.name}
        {...props.inputProps}
        ref={ref}
      />
    );
  }
);

export default InputBase;
