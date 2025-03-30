import IOUList from './components/IOUList';
import { ResultInfoBlueBox, ResultSectionBox } from './components/InfoBox';
import { SectionTitle } from './components/SectionTitle';
import SummaryResult from './components/SummaryResult';

function CalculateResult() {
  return (
    <ResultSectionBox>
      <SectionTitle title="정산 결과" />
      <div className="flex flex-col gap-[20px]">
        <ResultInfoBlueBox className="flex flex-col justify-center items-center w-[100%]">
          <SummaryResult />
        </ResultInfoBlueBox>
        <IOUList />
      </div>
    </ResultSectionBox>
  );
}

export default CalculateResult;
