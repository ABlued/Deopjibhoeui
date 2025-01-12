import React, { useRef } from 'react';
import Title from './components/Title';
import { useHistoryStore } from './hooks/useHistory';
import Table from '../../components/Table';
import Stack from '../../components/Div/Stack';
import { ColumnDef } from '@tanstack/react-table';
import { History } from './types/History';
import { VscCheck } from 'react-icons/vsc';
import Clickable from '../../components/Div/Clickable';
import Input from '../../components/Input/Input';

const defaultColumn: Partial<ColumnDef<History>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {
    console.log('### getValue', getValue);
    console.log('### index', index);
    console.log('### id', id);

    const initialValue = getValue();
    const [value, setValue] = React.useState(initialValue);
    const [isEditing, setIsEditing] = React.useState(false);
    const inputRef = useRef<HTMLInputElement>(null);

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
          <Input
            ref={inputRef}
            fullWidth
            value={value as string}
            onChange={(e) => setValue(e.target.value)}
            className="flex-1 mr-[10px]"
          />
          <Clickable className="w-[32px] h-[32px] text-primary-main">
            <VscCheck
              onClick={() => {
                setIsEditing(false);
                table.options.meta?.updateData(index, id, value);
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
            {value as string}
          </div>
        </Clickable>
      );
    }
  }
};
function CalculateHistory() {
  const { histories, setHistoriesByKey } = useHistoryStore();

  return (
    <Stack className="gap-[52px]">
      <Title title="정산 내역" />
      <Table
        columns={[
          {
            id: 'purchaseDate',
            header: '날짜',
            accessorFn: (row) =>
              new Date(row.purchaseDate).toLocaleString('ko-KR')
          },
          {
            id: 'purchaseHistory',
            header: '내용',
            accessorFn: (row) => row.purchaseHistory
          },
          {
            id: 'buyer',
            header: '결제자',
            accessorFn: (row) => row.buyer
          },
          {
            id: 'cost',
            header: () => <p style={{ textAlign: 'right' }}>비용</p>,
            accessorFn: (row) => `${row.cost.toLocaleString()}원`,
            meta: {
              headerClassName: 'text-right',
              cellClassName: 'text-right'
            }
          }
        ]}
        rowData={histories}
        tableOptions={{
          defaultColumn,
          meta: {
            updateData: (rowIndex, columnId, value) => {
              setHistoriesByKey(
                rowIndex,
                columnId as keyof History,
                value as History[keyof History]
              );
              console.log('### rowIndex', rowIndex);
              console.log('### columnId', columnId);
              console.log('### value', value);
            }
          }
        }}
      />
    </Stack>
  );
}

export default CalculateHistory;
