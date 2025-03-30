import { useHistoryStore } from '../../hooks/useHistory';
import HistoryItem from './HistoryItem';

function HistoryList() {
  const { histories } = useHistoryStore();
  return (
    <div className="flex flex-col gap-[20px]">
      {histories.map((history, i) => (
        <HistoryItem key={history.id} history={history} />
      ))}
    </div>
  );
}

export default HistoryList;
