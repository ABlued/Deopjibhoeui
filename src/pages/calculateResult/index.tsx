import React from 'react';
import Card from '../../components/Card/Card';
import Members from '../../modules/result/MembersContainer';
import CalculateHistory from '../../modules/result/CalculateHistoryContainer';
import CalculateResult from '../../modules/result/CalculateResultContainer';
import Button from '../../components/Button/Button';
import PlusIcon from '../../assets/svg/Plus.svg?react';
import { openDialog } from '../../core/utils/dialog';
import { ResultDialog } from '../../modules/result/dialog';
import { useTitleStore } from '../../modules/setTitle/hooks/useTitleStore';
function ResultPage() {
  const { title } = useTitleStore();
  return (
    <div className="flex items-center justify-center">
      <Card className="w-[calc(100vw-40px)] box-border p-[60px] my-[50px]">
        <div className="flex flex-col gap-[62px]">
          <div className="flex justify-between">
            <span className="font-bold text-[36px]">정산하기: {title}</span>
            <Button
              text="내역 추가"
              size={'small'}
              onClick={() => {
                openDialog(ResultDialog.addHistory());
              }}
              startIcon={() => (
                <PlusIcon
                  width={20}
                  height={20}
                  style={{
                    display: 'inline'
                  }}
                />
              )}
              className="w-[120px] font-bold text-[16px] "
            />
          </div>
          <Members />
          <CalculateResult />
          <CalculateHistory />
        </div>
      </Card>
    </div>
  );
}

export default ResultPage;
