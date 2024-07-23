import { useState } from 'react';
import { TargetValue } from '../../types/common/targetValue';
import { UseInputState } from './types/useInput';

export const useInput = <T>(text: string, initError: T): UseInputState<T> => {
  const [value, setValue] = useState<string>(text);
  const [error, setError] = useState<T>(initError);

  const onChange = (e: TargetValue<string> | string) => {
    const text = (e as TargetValue<string>)?.target?.value ?? e;
    setValue(text);
  };

  const onChangeError = (value: T) => {
    setError(value);
  };

  const reset = () => {
    setValue(text);
    setError(initError);
  };
  return {
    value,
    error,
    onChange,
    onChangeError,
    reset
  };
};
