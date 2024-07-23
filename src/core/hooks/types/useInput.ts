import { TargetValue } from '../../../types/common/targetValue';

export type UseInputState<T> = {
  value: string;
  error: T;
  onChange: (e: TargetValue<string> | string) => void;
  onChangeError: (value: T) => void;
  reset: () => void;
};
