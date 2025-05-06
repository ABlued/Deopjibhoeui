'use client';
import { useState } from 'react';
import { TargetValue } from '../../types/common/targetValue';
import { FunctionValidation } from '../utils/types/validate';
import { UseInputState } from './types/useInputBase';

export const useInputBase = <T>({
  text,
  initError,
  validator
}: {
  text: string;
  initError: T;
  validator?: FunctionValidation<T>;
}): UseInputState<T> => {
  const [value, setValue] = useState<string>(text);
  const [error, setError] = useState(initError);

  const onChange = (e: TargetValue<string> | string) => {
    const text = (e as TargetValue<string>)?.target?.value ?? e;
    if (validator) setError(validator(text));
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
