import React from 'react';
import Stack from '../../../../components/Div/Stack';
import Input from '../../../../components/Input/Input';
import Button from '../../../../components/Button/Button';
import { HasDialogId } from '../../../../core/utils/types/dialog';
import { closeDialog } from '../../../../core/utils/dialog';
import { useAddHistory } from '../../hooks/useAddHistory';
import LocaleNumberInput from '../../../../components/Input/LocaleNumberInput';

function AddHistory({ dialogId }: HasDialogId) {
  const { form, cost } = useAddHistory();

  return (
    <div>
      <div className="pt-[24px] pl-[24px] pr-[24px]">
        <p className="text-[24px] font-[700] mb-[42px]">비용을 입력하세요</p>
        <Stack>
          <Input
            key={'purchaseHistory'}
            fullWidth
            placeholder="어떤 결제인가요?"
            {...form.formProps.purchaseHistory}
          />

          <Input
            key={'purchaseDate'}
            fullWidth
            placeholder="언제 결제했나요?"
            {...form.formProps.purchaseDate}
            inputProps={{
              type: 'text',
              onFocus: (e) => {
                e.currentTarget.type = 'datetime-local';
              }
            }}
          />
          <Input
            key={'buyer'}
            fullWidth
            placeholder="누가 결제했나요?"
            {...form.formProps.buyer}
          />
          <LocaleNumberInput
            fullWidth
            placeholder="비용은 얼마인가요?"
            {...cost}
          />
        </Stack>
      </div>
      <div className="flex justify-end gap-2 mt-[46px]">
        <Button
          text="추가"
          disabled={!form.isValid()}
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
    </div>
  );
}

export default AddHistory;
