import Title from './components/Title';
import { useHistoryStore } from './hooks/useHistory';
import Table from '../../components/Table';
import Stack from '../../components/Div/Stack';
import { ColumnDef } from '@tanstack/react-table';
import { History } from './types/History';
import Select from '../../components/Select/Select';
import { useFriendsNameStore } from '../setTitle/hooks/useFriendsNameStore';
import LocaleNumberInput from '../../components/Input/LocaleNumberInput';
import Input from '../../components/Input/Input';

const defaultColumn: Partial<ColumnDef<History>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {}
};
function CalculateHistory() {
  const { histories, setHistoriesByKey } = useHistoryStore();
  const { names } = useFriendsNameStore();

  return (
    <Stack className="gap-[52px]">
      <Title title="정산 내역" />
      <Table
        columns={[
          {
            id: 'purchaseDate',
            header: '날짜',
            accessorFn: (row) =>
              new Date(row.purchaseDate).toLocaleString('ko-KR'),
            meta: {
              canEdit: true,
              editComponent: ({ value, setValue }) => {
                return (
                  <Input
                    fullWidth
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                    }}
                    inputProps={{
                      type: 'datetime-local'
                    }}
                  />
                );
              }
            }
          },
          {
            id: 'purchaseHistory',
            header: '내용',
            accessorFn: (row) => row.purchaseHistory,

            meta: {
              canEdit: true
            }
          },
          {
            id: 'buyer',
            header: '결제자',
            accessorFn: (row) => row.buyer,
            meta: {
              canEdit: true,
              editComponent: ({ value, setValue }) => {
                return (
                  <Select
                    className="w-[100%]"
                    items={names.map((name) => ({ value: name, label: name }))}
                    selected={value}
                    onChange={setValue}
                  />
                );
              }
            }
          },
          {
            id: 'cost',
            header: () => <p style={{ textAlign: 'right' }}>비용</p>,
            accessorFn: (row) => `${row.cost.toLocaleString()}원`,
            meta: {
              headerClassName: 'text-right',
              cellClassName: 'text-right',
              canEdit: true,
              editComponent: ({ value, setValue }) => {
                return (
                  <LocaleNumberInput
                    fullWidth
                    className="w-[100px]"
                    value={value}
                    onChange={(value) => setValue(value)}
                  />
                );
              }
            }
          }
        ]}
        rowData={histories}
        tableOptions={{
          meta: {
            updateData: (rowIndex, columnId, value) => {
              setHistoriesByKey(
                rowIndex,
                columnId as keyof History,
                value as History[keyof History]
              );
              // TODO: transform data
              // TODO: validate data
            }
          }
        }}
      />
    </Stack>
  );
}

export default CalculateHistory;
