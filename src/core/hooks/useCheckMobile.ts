import { useEffect, useState } from 'react';

export const useCheckMobile = () => {
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

  return {
    isMobile
  };
};
