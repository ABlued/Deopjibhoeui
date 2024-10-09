import React from 'react';
import Card from '../../components/Card/Card';
import Members from '../../modules/result/MembersContainer';
import CalculateHistory from '../../modules/result/CalculateHistoryContainer';
import CalculateResult from '../../modules/result/CalculateResultContainer';
import Button from '../../components/Button/Button';
import { ReactComponent as PlusIcon } from '../../assets/svg/plus.svg';
import { openDialog } from '../../core/utils/dialog';
function ResultPage() {
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-center">
      <Card className="w-[calc(100vw-40px)] h-[calc(100vh-40px)] box-border p-[60px]">
        <div className="flex flex-col gap-[62px]">
          <div className="flex justify-between">
            <span className="font-bold text-[36px]">정산하기</span>
            <Button
              text="내역 추가"
              size={'small'}
              onClick={() => {
                openDialog({
                  content: () => <div>내역 추가</div>,
                  dialogId: 'addHistory'
                });
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
