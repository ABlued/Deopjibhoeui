import React from 'react';
import RemoveIcon from '../../assets/svg/RemoveIcon.svg?react';
import { cn } from '../../core/utils/classname/cn';

export interface LabelProps {
  tag: string;
  id: number;
  divClassName?: string;
  onDelete?: (index: number) => void;
}

function Label({ tag, id, onDelete, divClassName }: LabelProps) {
  return (
    <li
      className={cn(
        'text-lg  p-2.5 m-1 cursor-default bg-primary-lighter text-primary-dark rounded-full flex justify-evenly items-center min-w-[70px]',
        divClassName
      )}
    >
      <span className="mt-[3px]">{tag}</span>
      {onDelete && (
        <span
          className="w-4 h-4 leading-4 text-center text-sm ml-2 mr-2 text-blue-700 rounded-full cursor-pointer"
          onClick={() => onDelete(id)}
        >
          <RemoveIcon />
        </span>
      )}
    </li>
  );
}

export default Label;
