import React from 'react';

function Title({ title }: { title: string }) {
  return <p className="font-bold text-[28px]">{title}</p>;
}

export default Title;
