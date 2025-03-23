import React from 'react';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Input from '../../../components/Input/Input';
import FriendNameTagInput from './FriendNameTagInput';
import { useSetTitleForm } from '../hooks/useSetTitleForm';
import clsx from 'clsx';
function SetTitleForm() {
  const { title, tagInput, submit, disabled } = useSetTitleForm();

  return (
    <div className={clsx('w-[80%] m-[2rem]', 'tablet:px-0 tablet:w-[90%]')}>
      <Card
        className={clsx(
          'm-[3rme 3.5rem] bg-[#ffffff] w-[100%] min-h-[311px]',
          'tablet-card tablet:w-[100%]'
        )}
      >
        <div className="py-[63px] px-[58px] flex flex-col gap-[55px] tablet:px-0">
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
