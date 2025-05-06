import { VscTrash } from 'react-icons/vsc';
import { useHistoryStore } from '../../hooks/useHistory';

function DeleteButton({ id }: { id: string }) {
  const { deleteHistoriesByID } = useHistoryStore();
  return (
    <VscTrash
      className="text-error-main"
      onClick={() => {
        deleteHistoriesByID(id);
      }}
    />
  );
}

export default DeleteButton;
