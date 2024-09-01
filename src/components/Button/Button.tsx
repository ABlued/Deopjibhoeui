import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';
import { cn } from '../../core/utils/classname/cn';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  text: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
  fullWidth?: boolean;
  startIcon?: () => JSX.Element;
}

const ButtonVariants = cva(
  `
text-white bg-primary-main hover:bg-primary-light focus:ring-4 focus:ring-blue-300 h-auto font-medium rounded-lg text-sm px-5 py-2.5 shadow-[4px_12px_20px_rgba(0,0,0,0.25)] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800
  `,
  {
    variants: {
      variant: {
        default: ' shadow-none active:scale-100',
        grey: ' bg-slate-buttongrey ',
        blue: ' bg-accent-blue'
      },
      size: {
        default: '',
        md: ' w-[6.875rem] h-[2.375rem] text-[1rem] rounded-md',
        lg: 'w-[21.875rem] h-[7.5rem] text-[3rem] rounded-3xl',
        wlg: 'w-[24rem] h-[5.25rem] text-[2rem]'
      },
      disabled: {
        true: 'opacity-50 cursor-default pointer-events-none',
        false: ''
      },
      fullWidth: {
        true: 'w-full',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      disabled: false,
      fullWidth: false
    }
  }
);

function Button({
  text,
  variant,
  size,
  onClick,
  className,
  fullWidth,
  disabled,
  startIcon
}: ButtonProps) {
  return (
    <>
      <button
        type="button"
        className={cn(
          ButtonVariants({ variant, size, disabled, fullWidth }),
          className
        )}
        onClick={onClick}
      >
        {startIcon && startIcon()}
        {text}
      </button>
    </>
  );
}

export default Button;
