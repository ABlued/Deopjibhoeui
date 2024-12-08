import React from 'react';
import { cn } from '../../core/utils/classname/cn';

function NumberWithComma({
  value,
  className
}: {
  value: number;
  className?: string;
}) {
  return <span className={cn(className)}>{value.toLocaleString()}</span>;
}

export default NumberWithComma;
