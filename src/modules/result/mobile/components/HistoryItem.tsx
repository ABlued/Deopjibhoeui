import { ResultInfoBlueBox } from './InfoBox';
import { History } from '../../types/History';
import { formatPurchaseDay } from '../../utils/formatPurchaseDate';
import styled from 'styled-components';
import HistoryManagement from './HistoryManagement';

const StyledP = styled('p')`
  font-size: 1rem;
  font-weight: bold;
  width: fit-content;
`;

function HistoryItem({ history }: { history: History }) {
  return (
    <>
      <ResultInfoBlueBox className="flex flex-col items-center">
        <div className="self-end inline">
          <HistoryManagement />
        </div>
        <div className="w-fit">
          <StyledP className="truncate-text">
            📅 {formatPurchaseDay(history.purchaseDate)}
          </StyledP>
          <StyledP className="truncate-text">
            💳 {history.purchaseHistory}
          </StyledP>
          <StyledP className="truncate-text">
            👤 결제자: {history.buyer}
          </StyledP>
          <StyledP className="truncate-text">{`💸 비용: ${history.cost.toLocaleString()}원`}</StyledP>
        </div>
      </ResultInfoBlueBox>
    </>
  );
}

export default HistoryItem;
