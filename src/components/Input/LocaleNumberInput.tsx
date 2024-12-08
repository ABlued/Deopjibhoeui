import React from 'react';
import Input, { InputProps } from './Input';

function LocaleNumberInput(
  props: InputProps<string> & { defaultValue?: string }
) {
  const getValue = () => {
    if (props.value)
      return Number(props.value?.replaceAll(/[^0-9]/g, '')).toLocaleString();
    if (props.defaultValue) return props.defaultValue;
    return '';
  };

  return (
    <Input
      {...props}
      value={getValue()}
      onChange={(e) => {
        props.onChange?.(e.target.value.replaceAll(/[^0-9]/g, ''));
      }}
    />
  );
}

export default LocaleNumberInput;
