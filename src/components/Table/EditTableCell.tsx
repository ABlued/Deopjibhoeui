import { Cell, Table } from '@tanstack/react-table';
import React from 'react';
import Input from '../Input/Input';
import Clickable from '../Div/Clickable';
import { ValidationResult } from '../../core/utils/types/validate';
import CheckIcon from '../Icon/CheckIcon';
import { VscChromeClose } from 'react-icons/vsc';
function EditTableCell<T>({
  cell,
  rowIndex,
  table,
  validate,
  transform
}: {
  cell: Cell<T, unknown>;
  rowIndex: number;
  table: Table<T>;
  validate?: (value: unknown) => ValidationResult;
  transform?: (value: unknown) => unknown;
}) {
  const initialValue = cell.getValue();
  const [value, setValue] = React.useState(initialValue);
  const [isEditing, setIsEditing] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  const getEditComponent = () => {
    if (cell.column.columnDef.meta?.editComponent) {
      const EditComponent = cell.column.columnDef.meta.editComponent;
      return (
        <EditComponent
          value={value}
          setValue={(value) => {
            setValue(value);
          }}
        />
      );
    } else {
      return (
        <Input
          ref={inputRef}
          fullWidth
          value={value as string}
          onChange={(e) => setValue(e.target.value)}
          className="flex-1 mr-[10px]"
          error={validate?.(value)}
          errorMessageClassName={'text-left'}
        />
      );
    }
  };

  if (isEditing) {
    return (
      <div className="flex justify-between items-center w-[100%]">
        {getEditComponent()}
        <Clickable
          className="w-[32px] h-[32px] text-primary-main"
          disabled={validate?.(value)?.isError}
        >
          <CheckIcon
            onClick={() => {
              setIsEditing(false);
              table.options.meta?.updateData(
                rowIndex,
                cell.id.split('_')[1],
                transform ? transform(value) : value
              );
            }}
            disabled={validate?.(value)?.isError}
          />
        </Clickable>
        <Clickable className="w-[32px] h-[32px] text-error-main">
          <VscChromeClose
            onClick={() => {
              setIsEditing(false);
              setValue(initialValue);
            }}
          />
        </Clickable>
      </div>
    );
  } else {
    return (
      <Clickable>
        <div
          className="w-full"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          {initialValue as string}
        </div>
      </Clickable>
    );
  }
}

export default EditTableCell;
