import { Cell, Table } from '@tanstack/react-table';
import React from 'react';
import Input from '../Input/Input';
import Clickable from '../Div/Clickable';
import { VscCheck } from 'react-icons/vsc';

function EditTableCell<T>({
  cell,
  rowIndex,
  table
}: {
  cell: Cell<T, unknown>;
  rowIndex: number;
  table: Table<T>;
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
  if (isEditing) {
    return (
      <div className="flex justify-between items-center w-[100%]">
        {(function () {
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
              />
            );
          }
        })()}
        <Clickable className="w-[32px] h-[32px] text-primary-main">
          <VscCheck
            onClick={() => {
              setIsEditing(false);
              table.options.meta?.updateData(
                rowIndex,
                cell.id.split('_')[1],
                value
              );
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
