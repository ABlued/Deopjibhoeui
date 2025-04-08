import Input from '../../../components/Input/Input';
import LocaleNumberInput from '../../../components/Input/LocaleNumberInput';
import Select from '../../../components/Select/Select';
import Table from '../../../components/Table/Table';
import { SelectionState } from '../../../core/hooks/useTableSelection';
import { emptyValidator } from '../../../core/utils/validator/emptyValidator';
import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import { useHistoryStore } from '../hooks/useHistory';
import { History } from '../types/History';
import { formatPurchaseDate } from '../utils/formatPurchaseDate';

function CalculateHistoryTable({
  tableSelection
}: {
  tableSelection: SelectionState<History>;
}) {
  const { histories, setHistoriesByKey } = useHistoryStore();
  const { names } = useFriendsNameStore();

  return (
    <Table
      selection={tableSelection}
      columns={[
        {
          id: 'checkbox',
          header: '',
          accessorFn: (row) => row.id,
          meta: {
            type: 'checkbox'
          }
        },
        {
          id: 'purchaseDate',
          header: '날짜',
          accessorFn: (row) => {
            return formatPurchaseDate(row.purchaseDate);
          },
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
  );
}

export default CalculateHistoryTable;
