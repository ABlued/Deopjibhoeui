import React from 'react';
import Title from '../../components/Typography/Title';
import SetTitleForm from '../../modules/setTitle/Components/Form';
import clsx from 'clsx';
function SetTitlePage() {
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-[38px] whitespace-pre',
        'tablet:w-[100%]'
      )}
    >
      <Title title="덮집회의" />
      <div
        className={clsx(
          'border-solid border-2 border-border-gray rounded-[20px] w-[min(586px,70%)] min-h-[506px] flex items-center justify-center',
          'tablet:border-0 tablet:w-[100%]'
        )}
      >
        <SetTitleForm />
      </div>
    </div>
  );
}

export default SetTitlePage;
