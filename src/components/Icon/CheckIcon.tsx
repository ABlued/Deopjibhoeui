import React from 'react';
import { VscCheck } from 'react-icons/vsc';
import { cn } from '../../core/utils/classname/cn';

type CustomProps = {
  disabled?: boolean;
};

type Props = React.SVGAttributes<SVGElement> & {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
} & CustomProps;

function CheckIcon(props: Props) {
  return (
    <VscCheck
      {...props}
      className={cn(
        props.className,
        props.disabled && 'text-gray-600 opacity-30 pointer-events-none'
      )}
    />
  );
}

export default CheckIcon;
