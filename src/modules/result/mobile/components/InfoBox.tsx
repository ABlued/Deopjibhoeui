import { ReactNode } from 'react';
import styled from 'styled-components';
import { cn } from '../../../../core/utils/classname/cn';

type Props = {
  children: ReactNode;
  className?: string;
};

export const ResultInfoBox = styled('div')`
  border-radius: 16px;
`;

export const ResultSectionBox = ({ children, className }: Props) => (
  <ResultInfoBox className={cn('bg-primary-lighter p-[12px]', className)}>
    {children}
  </ResultInfoBox>
);

export const ResultInfoBlueBox = ({ children, className }: Props) => (
  <ResultInfoBox className={cn('bg-[#C3DAFF] p-[12px]', className)}>
    {children}
  </ResultInfoBox>
);
export const ResultInfoGrayBox = ({ children, className }: Props) => (
  <ResultInfoBox className={cn('bg-primary-gray p-[12px]', className)}>
    {children}
  </ResultInfoBox>
);
