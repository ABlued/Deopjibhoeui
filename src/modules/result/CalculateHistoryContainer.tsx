import Title from './components/Title';
import { useHistoryStore } from './hooks/useHistory';
import Table from '../../components/Table';
import Stack from '../../components/Div/Stack';
import { ColumnDef } from '@tanstack/react-table';
import { History } from './types/History';

const defaultColumn: Partial<ColumnDef<History>> = {
  cell: ({ getValue, row: { index }, column: { id }, table }) => {}
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
            accessorFn: (row) => row.purchaseHistory,

            meta: {
              canEdit: true
            }
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
