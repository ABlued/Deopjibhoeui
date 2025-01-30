import Title from './components/Title';
import { useHistoryStore } from './hooks/useHistory';
import Table from '../../components/Table';
import Stack from '../../components/Div/Stack';
import { History } from './types/History';
import Select from '../../components/Select/Select';
import { useFriendsNameStore } from '../setTitle/hooks/useFriendsNameStore';
import LocaleNumberInput from '../../components/Input/LocaleNumberInput';
import Input from '../../components/Input/Input';
import { emptyValidator } from '../../core/utils/validator/emptyValidator';

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
              canEdit: true,
              validate: emptyValidator
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
              validate: emptyValidator,
              transform: Number,
              editComponent: ({ value, setValue }) => {
                return (
                  <LocaleNumberInput
                    fullWidth
                    className="w-[100px]"
                    value={value}
                    onChange={(value) => setValue(value)}
                    error={emptyValidator(value)}
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
            }
          }
        }}
      />
    </Stack>
  );
}

export default CalculateHistory;
