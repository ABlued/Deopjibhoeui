import React from 'react';
import PCResultContainer from '../../modules/result/PCResultContainer';
import MobileResultContainer from '../../modules/result/mobile';
import { useCheckMobile } from '../../core/hooks/useCheckMobile';

function ResultPage() {
  const { isMobile } = useCheckMobile();

  return (
    <div className="flex items-center justify-center">
      {isMobile ? <MobileResultContainer /> : <PCResultContainer />}
    </div>
  );
}

export default ResultPage;
