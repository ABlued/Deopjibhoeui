import { History } from '../../types/History';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function HistoryManagement({ history }: { history: History }) {
  return (
    <div className="flex gap-3 relative top-0 right-0">
      <DeleteButton />
      <EditButton history={history} />
    </div>
  );
}

export default HistoryManagement;
