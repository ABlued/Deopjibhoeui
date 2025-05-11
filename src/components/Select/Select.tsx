import React from 'react';
import { cn } from '../../core/utils/classname/cn';

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
          className={cn('input-style', fullWidth && 'w-[100%]')}
          onChange={(e) => {
            onChange?.(e.currentTarget.value);
          }}
          defaultValue={selected ?? ''}
        >
          {placeholder && <option value={''}>{placeholder}</option>}
          {items.sort().map((item) => {
            return (
              <option key={item.value} value={item.value}>
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
