import Button from '../../../components/Button/Button';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { VscArrowDown } from 'react-icons/vsc';
import { useTitleStore } from '../../setTitle/hooks/useTitleStore';
import { useState } from 'react';
import { DOWNLOAD_BUTTON_AREA_DOM_CLASSNAME } from '../../constant/className';

function ResultDownloadButton() {
  const { title } = useTitleStore();
  const [isLoading, setIsLoading] = useState(false);
  const downloadResult = async () => {
    setIsLoading(true);

    const pageContainer = document.getElementById('resultPage') as HTMLElement;
    const filter = (node: HTMLElement) => {
      const exclusionClasses = [DOWNLOAD_BUTTON_AREA_DOM_CLASSNAME];
      return !exclusionClasses.some((classname) => {
        return node.classList?.contains(classname);
      });
    };

    try {
      const dataUrl = await htmlToImage.toPng(pageContainer, {
        filter: filter
      });
      download(dataUrl, `${title}_정산결과.png`);
    } catch (error) {
      console.error('이미지 생성 실패:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button
      text={'내역 저장'}
      size={'small'}
      isLoading={isLoading}
      className="w-[120px] font-bold text-[16px]"
      onClick={downloadResult}
      startIcon={() => (
        <VscArrowDown
          width={20}
          height={20}
          style={{
            display: 'inline'
          }}
        />
      )}
    />
  );
}

export default ResultDownloadButton;
