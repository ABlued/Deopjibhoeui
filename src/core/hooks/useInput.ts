'use client';
import { UseInput, UseInputParams } from './types/useInput';
import { useInputBase } from './useInputBase';

export const useInput = ({
  text,
  initError,
  validator
}: UseInputParams): UseInput => {
  const inputBase = useInputBase({
    text,
    initError: initError ?? {
      isError: false,
      message: ''
    },
    validator
  });
  return {
    ...inputBase
  };
};
