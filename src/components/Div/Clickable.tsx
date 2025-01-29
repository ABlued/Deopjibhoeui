import React from 'react';
import { cn } from '../../core/utils/classname/cn';

function Clickable(
  props: React.HTMLProps<HTMLDivElement> & { disabled?: boolean }
) {
  return (
    <div
      {...props}
      className={cn(
        'clickable',
        props.className,
        props.disabled && 'pointer-events-none'
      )}
    >
      {props.children && props.children}
    </div>
  );
}

export default Clickable;
