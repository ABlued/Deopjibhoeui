import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function HistoryManagement() {
  return (
    <div className="flex gap-3 relative top-0 right-0">
      <EditButton />
      <DeleteButton />
    </div>
  );
}

export default HistoryManagement;
