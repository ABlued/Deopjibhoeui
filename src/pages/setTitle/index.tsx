import React from 'react';
import Title from '../../components/Typography/Title';
import SetTitleForm from '../../modules/setTitle/Components/Form';

function SetTitlePage() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center gap-[38px] whitespace-pre">
      <Title title="덮집회의" />
      <div className="border-solid border-2 border-border-gray rounded-[20px] w-[568px] h-[506px] flex items-center justify-center">
        <SetTitleForm />
      </div>
    </div>
  );
}

export default SetTitlePage;
