import Stack from '../../../components/Div/Stack';
import Input from '../../../components/Input/Input';
import Select from '../../../components/Select/Select';
import LocaleNumberInput from '../../../components/Input/LocaleNumberInput';
import { closeDialog } from '../../../core/utils/dialog';
import { HasDialogId } from '../../../core/utils/types/dialog';
import { cn } from '../../../core/utils/classname/cn';
import { HistoryFormProps } from './types';
import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import Button from '../../../components/Button/Button';

function HistoryForm(props: HasDialogId & HistoryFormProps) {
  const { names } = useFriendsNameStore();
  return (
    <>
      <div
        className={cn(
          'pt-[24px] pl-[24px] pr-[24px]',
          'tablet!:pt-[0px] tablet!:pl-[0px] tablet!:pr-[0px]'
        )}
      >
        <p className="text-[24px] font-[700] mb-[42px]">비용을 입력하세요</p>
        <Stack>
          <Input
            key={'purchaseHistory'}
            fullWidth
            placeholder="어떤 결제인가요?"
            {...props.form.formProps.purchaseHistory}
          />

          <Input
            key={'purchaseDate'}
            fullWidth
            placeholder="언제 결제했나요?"
            {...props.form.formProps.purchaseDate}
            inputProps={{
              type: 'text',
              onFocus: (e) => {
                e.currentTarget.type = 'datetime-local';
              }
            }}
          />
          <Select
            items={names.map((name) => ({ value: name, label: name }))}
            placeholder="누가 결제했나요?"
            selected={props.buyer}
            onChange={props.onChangeBuyer}
          />
          <LocaleNumberInput
            fullWidth
            placeholder="비용은 얼마인가요?"
            {...props.cost}
          />
        </Stack>
      </div>
      <div className="flex justify-end gap-2 mt-[46px]">
        <Button
          text="추가"
          disabled={!props.isValid()}
          onClick={(e) => {
            props.form.onSubmit(e);
            closeDialog(props.dialogId);
          }}
        />
        <Button
          text="취소"
          onClick={() => {
            closeDialog(props.dialogId);
          }}
        />
      </div>
    </>
  );
}

export default HistoryForm;
