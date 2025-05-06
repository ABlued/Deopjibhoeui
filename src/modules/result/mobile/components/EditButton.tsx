import { VscEdit } from 'react-icons/vsc';
import { openDialog } from '../../../../core/utils/dialog';
import { resultDialog } from '../../dialog';
import { History } from '../../types/History';

function EditButton({ history }: { history: History }) {
  const openEditModal = () => {
    openDialog(
      resultDialog.editHistory({
        maxWidth: 'mobile',
        history
      })
    );
  };
  return (
    <VscEdit
      className="text-primary-dark font-bold"
      onClick={() => openEditModal()}
    />
  );
}

export default EditButton;
