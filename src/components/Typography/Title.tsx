import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TitleProps {
  title: string;
  className?: string;
}

function Title({ title, className }: TitleProps) {
  return (
    <p className={twMerge('[font-size:2.5rem] font-bold', className)}>
      {title}
    </p>
  );
}

export default Title;
