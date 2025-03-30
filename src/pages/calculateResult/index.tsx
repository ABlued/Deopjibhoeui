import React, { useEffect, useState } from 'react';
import PCResultContainer from '../../modules/result/PCResultContainer';
import MobileResultContainer from '../../modules/result/mobile';

function ResultPage() {
  const [isMobile, setIsMobile] = useState(false);
  const MOBILE_WIDTH = 600;

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= MOBILE_WIDTH);
    };

    checkIsMobile();

    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {isMobile ? <MobileResultContainer /> : <PCResultContainer />}
    </div>
  );
}

export default ResultPage;
