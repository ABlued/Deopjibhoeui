import NumberWithComma from '../../../../components/Typography/NumberWithComma';
import { useTransaction } from '../../hooks/useTransaction';
import { ResultInfoGrayBox } from './InfoBox';

function IOUList() {
  const { transaction } = useTransaction();
  return (
    <div className="flex flex-col gap-[10px]">
      {transaction.map((t, i) => (
        <ResultInfoGrayBox key={i} className="flex justify-between">
          <div className="truncate-text">
            {`👤 ${t.sender} → 🧍${t.receiver}`}
          </div>
          <p className="font-bold break-keep">{`💰 ${t.amount.toLocaleString()} 원`}</p>
        </ResultInfoGrayBox>
      ))}
    </div>
  );
}

export default IOUList;
