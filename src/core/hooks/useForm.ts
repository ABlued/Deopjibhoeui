import * as React from 'react';
import { useCallback, useMemo, useState } from 'react';
import { TargetName, TargetValue } from '../../types/common/targetValue';
import { FunctionValidation, ValidationResult } from '../utils/types/validate';
import { InputProps } from '../../components/Input/Input';

type SubmitEvent =
  | React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type UseFormProps<T, V, R> = {
  initialValues: T;
  requires?: R;
  validators: V;
  onSubmit: (e: SubmitEvent) => void;
};

export type UseFormInjectErrorParams = {
  field: string;
  error: Error;
};
export interface UseFormResult<T> {
  values: T;
  formProps: Record<keyof T, InputProps>;
  isValid: () => boolean;
  reset: () => void;
  onChange: (event: TargetValue<string> & TargetName) => void;
  onSubmit: (event: SubmitEvent) => void;
  setError: (params: UseFormInjectErrorParams) => void;
}

export function useForm<
  TValue extends { [key: string]: any },
  TValidator extends { [key: string]: FunctionValidation<ValidationResult> },
  TRequire extends { [key: string]: boolean }
>({
  initialValues,
  validators,
  requires,
  onSubmit
}: UseFormProps<TValue, TValidator, TRequire>): UseFormResult<TValue> {
  type ValidationErrors = Record<keyof TValue, ValidationResult>;
  const initialErrors = useMemo(
    () =>
      Object.keys(initialValues).reduce((accumulator, field) => {
        accumulator[field as keyof TValue] = { isError: false };
        return accumulator;
      }, {} as ValidationErrors),
    [initialValues]
  );

  const [errors, setErrors] = useState(initialErrors);
  const [values, setValues] = useState(initialValues);

  const resetErrors = useCallback(
    () => setErrors(initialErrors),
    [initialErrors]
  );

  const reset = useCallback(() => {
    setValues(initialValues);
    resetErrors();
  }, [initialValues, resetErrors]);

  const setErrorByField = useCallback((field: string, value: string) => {
    const check = () => {
      const validator = validators?.[field];
      const require = Boolean(requires?.[field]);

      if (!require && !value.length) return { isError: false };
      return validator?.(value) ?? { isError: false };
    };

    return setErrors((currentErrors) => ({
      ...currentErrors,
      [field]: check()
    }));
  }, []);

  const setError = useCallback(
    ({ error, field }: UseFormInjectErrorParams) =>
      setErrors((currentErrors) => ({
        ...currentErrors,
        [field]: {
          isError: true,
          message: error.message
        }
      })),
    []
  );

  const isValid = useCallback(() => {
    const isEmpty = (field: string) => {
      return requires
        ? requires[field]
          ? values[field]?.length <= 0
          : false
        : false;
    };
    return (
      Object.keys(values).filter((field) => {
        return errors[field].isError || isEmpty(field);
      }).length <= 0
    );
  }, [values, errors]);

  const onChange = useCallback((event: TargetValue<string> & TargetName) => {
    if (event.target.name) {
      setValues((currentValues) => ({
        ...currentValues,
        [event.target.name as string]: event.target.value
      }));
      setErrorByField(event.target.name, event.target.value);
    }
  }, []);

  const onSubmitWithValidation = (event: SubmitEvent) => {
    event.preventDefault();
    if (isValid()) onSubmit(event);
  };

  type ResultForm = Record<keyof TValue, InputProps>;
  const formData = useMemo(
    () =>
      Object.keys(values).reduce((accumulator, field) => {
        const error = errors[field];
        accumulator[field as keyof TValue] = {
          name: field,
          onChange: onChange,
          error: error,
          value: values[field]
        };
        return accumulator;
      }, {} as ResultForm),
    [values, errors]
  );

  return {
    values,
    formProps: formData,
    isValid,
    reset,
    onChange,
    onSubmit: onSubmitWithValidation,
    setError
  };
}
