import React from 'react';
import { cn } from '../../core/utils/classname/cn';

function Clickable(props: React.HTMLProps<HTMLDivElement>) {
  return (
    <div {...props} className={cn('clickable', props.className)}>
      {props.children && props.children}
    </div>
  );
}

export default Clickable;
