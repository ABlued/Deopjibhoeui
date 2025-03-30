import HistoryList from './components/HistoryList';
import { ResultSectionBox } from './components/InfoBox';
import { SectionTitle } from './components/SectionTitle';

function CalculateHistory() {
  return (
    <ResultSectionBox>
      <SectionTitle title="정산 내역" />
      <HistoryList />
    </ResultSectionBox>
  );
}

export default CalculateHistory;
