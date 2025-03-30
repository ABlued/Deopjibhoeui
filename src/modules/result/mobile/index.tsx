import React from 'react';
import CalculateMember from './CalculateMember';
import CalculateResultContainer from './CalculateResult';
import CalculateHistory from './CalculateHistory';

function MobileResultContainer() {
  return (
    <div className="p-[2rem] w-[100%]">
      <p className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">
        정산하기
      </p>
      <CalculateMember />
      <CalculateResultContainer />
      <CalculateHistory />
    </div>
  );
}

export default MobileResultContainer;
