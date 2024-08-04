import React from 'react';
import Button from '../../../components/Button/Button';
import Card from '../../../components/Card/Card';
import Input from '../../../components/Input/Input';
import { useInput } from '../../../core/hooks/useInput';
import { titleValidator } from '../../../core/utils/validator/titleValidator';

function SetTitleForm() {
  const title = useInput({
    text: '',
    validator: titleValidator
  });

  return (
    <div>
      <Card className="p-[53px 63px] bg-[#ffffff] w-[459px] h-[311px]">
        <div className="py-[63px] px-[58px] flex flex-col gap-[55px]">
          <Input fullWidth {...title} placeholder="정산 제목 입력" />
          <Input
            fullWidth
            placeholder="함께 정산하는 친구의 이름"
            subPlaceholder="각 친구들의 이름은 ‘Tab’키로 구분해요."
          />
        </div>
      </Card>
      <div className="w-[100%]">
        <Button
          fullWidth
          text="확인"
          onClick={() => {}}
          className={'mt-[62px]'}
        />
      </div>
    </div>
  );
}

export default SetTitleForm;
