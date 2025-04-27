import React, { JSX } from 'react';
import { twMerge } from 'tailwind-merge';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

function Card({ children, className }: CardProps): JSX.Element {
  return (
    <div
      className={twMerge(
        'rounded-[20px] shadow-[4px_12px_20px_rgba(0,0,0,0.25)] bg-white',
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
