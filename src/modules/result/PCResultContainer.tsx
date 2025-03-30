import Card from '../../components/Card/Card';
import Members from '../../modules/result/MembersContainer';
import CalculateHistory from '../../modules/result/CalculateHistoryContainer';
import CalculateResult from '../../modules/result/CalculateResultContainer';
import { useTitleStore } from '../../modules/setTitle/hooks/useTitleStore';
import ResultDownloadButton from '../../modules/result/components/DownloadButton';
import { DOWNLOAD_BUTTON_AREA_DOM_CLASSNAME } from '../../modules/constant/className';
import HistoryAddButton from './components/HistoryAddButton';

function PCResultContainer() {
  const { title } = useTitleStore();

  return (
    <Card className="w-[calc(100vw-40px)] box-border p-[60px] my-[50px]">
      <div className="flex flex-col gap-[62px]">
        <div className="flex justify-between">
          <span className="font-bold text-[36px]">정산하기: {title}</span>
          <div className={`${DOWNLOAD_BUTTON_AREA_DOM_CLASSNAME} flex gap-2`}>
            <ResultDownloadButton />
            <HistoryAddButton />
          </div>
        </div>
        <Members />
        <CalculateResult />
        <CalculateHistory />
      </div>
    </Card>
  );
}

export default PCResultContainer;
