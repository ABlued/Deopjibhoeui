import React from 'react';
import { cn } from '../../core/utils/classname/cn';

type Props = {
  children: React.ReactNode;
  className?: string;
};

function Stack({ children, className }: Props): JSX.Element {
  return (
    <div className={cn('flex flex-col gap-[8px]', className)}>{children}</div>
  );
}

export default Stack;
