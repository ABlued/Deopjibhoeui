import Button from '../../../components/Button/Button';
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';
import { VscArrowDown } from 'react-icons/vsc';
import { useTitleStore } from '../../setTitle/hooks/useTitleStore';
import { useState } from 'react';
import { DOWNLOAD_BUTTON_AREA_DOM_ID } from '../../constant/domId';

function ResultDownloadButton() {
  const { title } = useTitleStore();
  const [isLoading, setIsLoading] = useState(false);
  const downloadResult = async () => {
    setIsLoading(true);

    const root = document.getElementById('root') as HTMLElement;
    const capture = root.cloneNode(true) as HTMLElement;

    console.log('copy', capture);
    const elementToRemove = capture.querySelector(
      `#${DOWNLOAD_BUTTON_AREA_DOM_ID}`
    );
    console.log('elementToRemove', elementToRemove);

    if (elementToRemove) {
      elementToRemove.remove();
    }

    // 스타일 유지하면서 화면에서 안 보이도록 설정
    // TODO: 복사된 엘리먼트가 화면에 완벽히 보이지 않도록 설정
    capture.style.position = 'absolute';
    capture.style.top = '0';
    capture.style.left = '10px';
    capture.style.zIndex = '-1';
    root.appendChild(capture);

    // 약간의 지연을 주어 렌더링을 기다림
    await new Promise((resolve) => setTimeout(resolve, 500));

    try {
      const dataUrl = await htmlToImage.toPng(capture, { cacheBust: true });
      download(dataUrl, `${title}_정산결과.png`);
    } catch (error) {
      console.error('이미지 생성 실패:', error);
    } finally {
      root.removeChild(capture);
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
