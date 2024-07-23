import { UseInputState } from './types/useInput';

export const useInput = <T>(text: string, initError: T): UseInputState<T> => {
  return {
    value: '',
    error: initError,
    onChange: () => {},
    onChangeError: () => {},
    reset: () => {}
  };
};
