import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps {
  text: string;
  onClick: () => void;
  className?: string;
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      type="button"
      className={twMerge(
        'text-white bg-primary-main hover:bg-primary-light focus:ring-4 focus:ring-blue-300 h-[40px] font-medium rounded-lg text-sm px-5 py-2.5 shadow-[4px_12px_20px_rgba(0,0,0,0.25)] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800',
        className
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;