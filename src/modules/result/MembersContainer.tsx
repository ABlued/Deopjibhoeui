import React from 'react';
import Divider from '../../components/Div/Divider';
import { useFriendsNameStore } from '../setTitle/hooks/useFriendsNameStore';
import Label from '../../components/Div/Label';

function Members() {
  const { names } = useFriendsNameStore();
  return (
    <div>
      <Divider />
      <div className="flex  w-[100%] h-[54px]">
        <div className="flex-2 w-[30%] bg-column-main p-[10px]">
          <span className="flex items-center table-header-title">
            정산할 사람들
          </span>
        </div>
        <div className="p-[0px] w-[70%] flex gap-2 items-center ml-2 mr-2">
          {names.map((name, index) => (
            <Label key={index} id={index} tag={name} divClassName="p-1" />
          ))}
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Members;
