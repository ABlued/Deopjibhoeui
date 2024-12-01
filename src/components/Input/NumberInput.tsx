import React from 'react';
import Input, { InputProps } from './Input';

function NumberInput(props: InputProps<string>) {
  return (
    <Input
      {...props}
      value={Number(props.value?.replaceAll(/[^0-9]/g, '')).toLocaleString()}
      onChange={(e) => {
        props.onChange?.(e.target.value.replaceAll(/[^0-9]/g, ''));
      }}
    />
  );
}

export default NumberInput;
