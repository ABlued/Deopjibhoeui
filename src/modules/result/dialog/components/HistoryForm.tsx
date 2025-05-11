import DatePicker from 'react-datepicker';
import Stack from '../../../../components/Div/Stack';
import Input from '../../../../components/Input/Input';
import LocaleNumberInput from '../../../../components/Input/LocaleNumberInput';
import Select from '../../../../components/Select/Select';
import { cn } from '../../../../core/utils/classname/cn';
import { HasDialogId } from '../../../../core/utils/types/dialog';
import { useFriendsNameStore } from '../../../setTitle/hooks/useFriendsNameStore';
import { HistoryFormProps } from '../types';
import dayjs from 'dayjs';

function HistoryForm(props: HasDialogId & HistoryFormProps) {
  const { names } = useFriendsNameStore();
  return (
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
        <DatePicker
          value={props.form.formProps.purchaseDate.value}
          onInputClick={() => {
            const modal = document.querySelector('#addHistory');
            if (modal) {
              modal.scrollTo({
                top: modal.scrollHeight,
                behavior: 'smooth'
              });
            }
          }}
          onChange={(date: Date | null) => {
            if (!date) return;
            const formatted = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
            const event = {
              target: {
                name: 'purchaseDate',
                value: formatted
              }
            } as React.ChangeEvent<HTMLInputElement>;
            props.form.formProps.purchaseDate.onChange?.(event);
          }}
          showTimeSelect
          timeIntervals={1}
          dateFormat="yyyy. MM. dd. a hh:mm '분'"
          placeholderText="언제 결제했나요?"
          className="input-style w-full"
        />
        <Select
          items={names.map((name) => ({ value: name, label: name }))}
          placeholder="누가 결제했나요?"
          className="text-border-gray"
          selected={props.buyer}
          onChange={props.onChangeBuyer}
          fullWidth
        />
        <LocaleNumberInput
          fullWidth
          placeholder="비용은 얼마인가요?"
          {...props.cost}
        />
      </Stack>
    </div>
  );
}

export default HistoryForm;
