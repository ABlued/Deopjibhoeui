import Button from '../../../../components/Button/Button';
import { closeDialog } from '../../../../core/utils/dialog';
import { HasDialogId } from '../../../../core/utils/types/dialog';
import { VscTrash } from 'react-icons/vsc';

function DeleteAllHistoryContent({
  onDeleteAll,
  dialogId
}: { onDeleteAll: () => void } & HasDialogId) {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-bold mb-4">전체 내역을 삭제하시겠습니까?</h2>
      <div className="flex gap-2">
        <Button
          variant={'error'}
          text="삭제"
          size={'small'}
          onClick={() => {
            onDeleteAll();
            closeDialog(dialogId);
          }}
          className="w-auto rounded-md px-3 text-xs font-bold text-[16px]"
          startIcon={() => <VscTrash />}
        />
        <Button
          text="취소"
          size={'small'}
          className="bg-white border-primary-main border-[1px] text-primary-main font-bold text-[16px]"
          onClick={() => {
            closeDialog(dialogId);
          }}
        />
      </div>
    </div>
  );
}

export default DeleteAllHistoryContent;
