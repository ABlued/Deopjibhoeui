import { VscEdit } from 'react-icons/vsc';
import { openDialog } from '../../../../core/utils/dialog';
import { resultDialog } from '../../dialog';

function EditButton() {
  const openEditModal = () => {
    openDialog(resultDialog.addHistory({}));
  };
  return (
    <VscEdit
      className="text-primary-dark font-bold"
      onClick={() => openEditModal()}
    />
  );
}

export default EditButton;
