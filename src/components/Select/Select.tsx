import React from 'react';

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
}

function Select({ items, selected, onChange, placeholder, className }: Props) {
  return (
    <div className={className}>
      <form className="max-w-sm mx-auto">
        {placeholder && (
          <label htmlFor="underline_select" className="sr-only">
            {placeholder}
          </label>
        )}
        <select
          id="underline_select"
          className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
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
