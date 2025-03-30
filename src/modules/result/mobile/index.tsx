import React from 'react';
import CalculateMember from './CalculateMember';
import CalculateResult from './CalculateResult';
import CalculateHistory from './CalculateHistory';
import HistoryAddButton from '../components/HistoryAddButton';

function MobileResultContainer() {
  return (
    <div className="flex flex-col gap-[15px] p-[2rem] w-[100%]">
      <p className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
        정산하기
      </p>
      <CalculateMember />
      <HistoryAddButton fullWidth className="w-[100%]" />
      <CalculateResult />
      <CalculateHistory />
    </div>
  );
}

export default MobileResultContainer;
