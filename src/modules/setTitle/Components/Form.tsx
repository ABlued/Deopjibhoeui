import React from 'react';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Input from '../../../components/Input/Input';
import FriendNameTagInput from './FriendNameTagInput';
import { useSetTitleForm } from '../hooks/useSetTitleForm';
function SetTitleForm() {
  const { title, tagInput, submit, disabled } = useSetTitleForm();

  return (
    <div className="px-[48px] py-[55px]">
      <Card className="m-[53px 63px] bg-[#ffffff] w-[459px] min-h-[311px]">
        <div className="py-[63px] px-[58px] flex flex-col gap-[55px]">
          <Input
            fullWidth
            {...title}
            placeholder="정산 제목 입력"
            inputProps={{ autoFocus: true }}
          />
          <FriendNameTagInput
            {...tagInput}
            placeholder={'함께 정산하는 친구의 이름'}
          />
        </div>
      </Card>
      <div className="w-[100%]">
        <Button
          fullWidth
          text="확인"
          onClick={submit}
          className={'mt-[62px]'}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default SetTitleForm;
