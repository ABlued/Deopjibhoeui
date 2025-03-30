import NumberWithComma from '../../../../components/Typography/NumberWithComma';
import { useFriendsNameStore } from '../../../setTitle/hooks/useFriendsNameStore';
import { useCalculateHistory } from '../../hooks/useCalculateHistory';

function SummaryResult() {
  const { names } = useFriendsNameStore();
  const { mountPerPerson, totalCost } = useCalculateHistory();

  return (
    <div>
      <p className="w-fit">👤 총 인원 : {names.length} 명</p>
      <p className="w-fit">
        💰 총 금액 :
        <NumberWithComma
          value={totalCost}
          className="font-bold text-error-main"
        />{' '}
        원
      </p>
      <p className="w-fit">
        🧍 인당 내야할 금액 :{' '}
        <NumberWithComma
          value={mountPerPerson}
          className="font-bold text-error-main"
        />{' '}
        원
      </p>
    </div>
  );
}

export default SummaryResult;
