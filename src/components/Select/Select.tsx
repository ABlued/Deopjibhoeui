import React from 'react';
import { cn } from '../../core/utils/classname/cn';
import { v4 as uuid } from 'uuid';

type Item = {
  value: string;
  label: string;
};

interface Props {
  items: Item[];
  placeholder?: string;
  selected?: string;
  onChange?: (value: string) => void;
  className?: string;
  fullWidth?: boolean;
}

function Select({
  items,
  selected,
  onChange,
  placeholder,
  className,
  fullWidth
}: Props) {
  return (
    <div className={cn(className, fullWidth && 'w-[100%]')}>
      <form className={cn('max-w-sm mx-auto', fullWidth && 'w-[100%]')}>
        {placeholder && (
          <label htmlFor="underline_select" className="sr-only">
            {placeholder}
          </label>
        )}
        <select
          id="underline_select"
          className={cn(
            'input-style',
            fullWidth && 'w-[100%]',
            selected && 'text-black'
          )}
          onChange={(e) => {
            onChange?.(e.currentTarget.value);
          }}
          defaultValue={selected ?? ''}
          value={selected}
        >
          {placeholder && (
            <option className="text-border-gray" value={''}>
              {placeholder}
            </option>
          )}
          {items.sort().map((item) => {
            return (
              <option key={uuid()} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
      </form>
    </div>
  );
}

export default Select;
