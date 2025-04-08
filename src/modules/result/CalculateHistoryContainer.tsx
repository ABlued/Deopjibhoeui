import Title from './components/Title';
import { useHistoryStore } from './hooks/useHistory';
import Stack from '../../components/Div/Stack';
import { useTableSelection } from '../../core/hooks/useTableSelection';
import CalculateHistoryTable from './components/CalculateHistoryTable';
import CalculateHistoryTableManagement from './components/CalculateHistoryTableManagement';

function CalculateHistory() {
  const { histories } = useHistoryStore();
  const tableSelection = useTableSelection({ items: histories });

  return (
    <Stack className="gap-[52px]">
      <Title title="정산 내역" />
      <div>
        <CalculateHistoryTableManagement tableSelection={tableSelection} />
        <CalculateHistoryTable tableSelection={tableSelection} />
      </div>
    </Stack>
  );
}

export default CalculateHistory;
