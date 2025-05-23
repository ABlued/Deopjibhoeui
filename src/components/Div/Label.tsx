import React from 'react';
import { cn } from '../../core/utils/classname/cn';
import { VscClose } from 'react-icons/vsc';

export interface LabelProps {
  tag: string;
  id: number;
  divClassName?: string;
  iconProps?: React.SVGProps<SVGElement>;
  onDelete?: (index: number) => void;
}

function Label({ tag, id, onDelete, divClassName, iconProps }: LabelProps) {
  return (
    <span
      className={cn(
        'text-lg p-2.5 m-1 cursor-default bg-primary-lighter text-primary-dark rounded-full flex justify-evenly items-center min-w-[70px]',
        divClassName
      )}
    >
      <span className="truncate-text">{tag}</span>
      {onDelete && (
        <span
          role="button"
          className={
            'text-lg text-center ml-2 mr-2 text-blue-700 rounded-full cursor-pointer'
          }
          onClick={() => onDelete(id)}
        >
          <VscClose {...iconProps} />
        </span>
      )}
    </span>
  );
}

export default Label;
