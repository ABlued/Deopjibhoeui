import React from 'react';
import Title from './components/Title';
import { useHistoryStore } from './hooks/useHistory';
import Table from '../../components/Table';
import Stack from '../../components/Div/Stack';

function CalculateHistory() {
  const { histories } = useHistoryStore();
  console.log('### histories', histories);

  return (
    <Stack className="gap-[52px]">
      <Title title="정산 내역" />
      <Table
        columns={[
          {
            id: 'purchaseDate',
            header: '날짜',
            accessorFn: (row) => row.purchaseDate
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
            header: '비용',
            accessorFn: (row) => row.cost
          }
        ]}
        rowData={histories}
      />
    </Stack>
  );
}

export default CalculateHistory;
