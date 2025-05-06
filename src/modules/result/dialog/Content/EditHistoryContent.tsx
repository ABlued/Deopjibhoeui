import React from 'react';
import { HasDialogId } from '../../../../core/utils/types/dialog';
import HistoryForm from '../components/HistoryForm';
import Button from '../../../../components/Button/Button';
import { closeDialog } from '../../../../core/utils/dialog';
import { useEditHistory } from '../../hooks/useEditHistory';
import { History } from '../../types/History';

function EditHistoryContent({
  dialogId,
  history
}: HasDialogId & { history: History }) {
  const { form, cost, buyer, onChangeBuyer, isValid } = useEditHistory(history);

  return (
    <>
      <HistoryForm
        dialogId={dialogId}
        form={form}
        cost={cost}
        buyer={buyer}
        onChangeBuyer={onChangeBuyer}
        isValid={isValid}
      />
      <div className="flex justify-end gap-2 mt-[46px]">
        <Button
          text="수정"
          disabled={!isValid()}
          onClick={(e) => {
            form.onSubmit(e);
            closeDialog(dialogId);
          }}
        />
        <Button
          text="취소"
          onClick={() => {
            closeDialog(dialogId);
          }}
        />
      </div>
    </>
  );
}

export default EditHistoryContent;
