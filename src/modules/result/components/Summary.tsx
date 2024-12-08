import React from 'react';
import { useFriendsNameStore } from '../../setTitle/hooks/useFriendsNameStore';
import Stack from '../../../components/Div/Stack';
import styled from 'styled-components';
import { useHistoryStore } from '../hooks/useHistory';
import NumberWithComma from '../../../components/Typography/NumberWithComma';
const StyledSpan = styled('span')`
  font-weight: bold;
  color: #4880ee;
`;

function Summary() {
  const { names } = useFriendsNameStore();
  const { histories } = useHistoryStore();
  const totalCost = histories.reduce((acc, cur) => acc + cur.cost, 0);
  return (
    <div className="w-[100%] h-[110px] flex items-center justify-center">
      <Stack className="flex-row gap-[60px] text-[24px] font-[500]">
        <span>
          총 인원 : <StyledSpan>{names.length}</StyledSpan>명
        </span>
        <span>
          {'총 금액 : '}
          <NumberWithComma
            value={totalCost}
            className="font-bold text-[#4880ee]"
          />
          원
        </span>
        <span>
          인당 내야할 금액 : <StyledSpan>0</StyledSpan>원
        </span>
      </Stack>
    </div>
  );
}

export default Summary;
