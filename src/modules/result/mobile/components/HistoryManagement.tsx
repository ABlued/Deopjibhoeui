import { History } from '../../types/History';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function HistoryManagement({ history }: { history: History }) {
  return (
    <div className="flex gap-3 relative top-0 right-0">
      <EditButton history={history} />
      <DeleteButton id={history.id} />
    </div>
  );
}

export default HistoryManagement;
