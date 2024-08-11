import React from 'react';

function SubPlaceholder({ text }: { text: string }) {
  return <p className={'text-border-gray text-xs mt-[4px]'}>{text}</p>;
}

export default SubPlaceholder;
