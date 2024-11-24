import React from 'react';
import { InputTag } from '../../core/hooks/types/useTagInput';
import Label from '../Div/Label';
import InputBase from './InputBase';
import { InputProps } from './Input';

export type TagInputProps = {
  tags: InputTag[];
  addTags: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  removeTags: (index: number) => void;
} & Pick<
  InputProps,
  | 'className'
  | 'fullWidth'
  | 'inputProps'
  | 'placeholder'
  | 'subPlaceholder'
  | 'error'
  | 'onChange'
>;

const TagInput = ({ tags, addTags, removeTags, ...rest }: TagInputProps) => {
  return (
    <div className="w-full rounded-sm">
      <InputBase
        fullWidth
        {...rest}
        inputProps={{
          onKeyUp: (event) => (event.key === 'Enter' ? addTags(event) : null)
        }}
      />
      <ul className="flex flex-wrap p-0 mt-2">
        {tags.map((tag, index) => (
          <Label
            key={index}
            divClassName="flex items-center h-[40px] font-[600] text-[13px]"
            tag={tag}
            id={index}
            onDelete={() => removeTags(index)}
            iconProps={{
              width: 12
            }}
          />
        ))}
      </ul>
    </div>
  );
};

export default TagInput;
