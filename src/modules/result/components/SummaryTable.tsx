import React from 'react';
import Table from '../../../components/Table';
import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import { useHistoryStore } from '../hooks/useHistory';
import { calculateMinimumTransaction } from '../utils/calculateMinimumTransaction';

function SummaryTable() {
  const { names } = useFriendsNameStore();
  const { histories } = useHistoryStore();

  const transaction = calculateMinimumTransaction({
    expense: histories,
    members: names
  });
  console.log('### transaction', transaction);
  return (
    <Table
      columns={[
        {
          id: 'purchaseDate',
          header: '주어야 할 사람',
          accessorFn: (row) => row.sender
        },
        {
          id: 'purchaseHistory',
          header: '받아야 할 사람',
          accessorFn: (row) => row.receiver
        },
        {
          id: 'buyer',
          header: '금액',
          meta: {
            headerClassName: 'text-right',
            cellClassName: 'text-right'
          },
          accessorFn: (row) => `${row.amount.toLocaleString()}원`
        }
      ]}
      rowData={transaction}
    />
  );
}

export default SummaryTable;
