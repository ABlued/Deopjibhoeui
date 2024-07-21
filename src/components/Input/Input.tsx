import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface InputProps {
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

function Input({ value, onChange, placeholder, className }: InputProps) {
  return (
    <>
      <input
        type={'text'}
        className={twMerge(
          'border-0 p-[10px 0]  border-b-[1px] border-[#D9D9D9] focus:border-primary-dark focus:ring-0 placeholder:text-border-gray2',
          className
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </>
  );
}

export default Input;
