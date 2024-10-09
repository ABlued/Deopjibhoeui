import { useCallback, useEffect } from 'react';
import { ActionEvent } from '../utils/types/setWindowEvent';

const useWindowEvent = <T>(
  eventName: string,
  onHandler: (payload: T) => void
) => {
  const handler = useCallback(
    ({ detail }: ActionEvent<T>) => {
      if (detail != undefined) onHandler(detail);
    },
    [onHandler]
  );
  useEffect(() => {
    window.addEventListener(eventName, handler);
    return () => {
      window.removeEventListener(eventName, handler);
    };
  }, []);
};

export default useWindowEvent;
