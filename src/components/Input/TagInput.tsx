import React from 'react';
import { InputTag } from '../../core/hooks/types/useTagInput';
import Label from '../Div/Label';

export interface TagInputProps {
  tags: InputTag[];
  addTags: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  removeTags: (index: number) => void;
  placeholder?: string;
}

const TagInput = ({
  tags,
  addTags,
  removeTags,
  placeholder
}: TagInputProps) => {
  return (
    <div className="w-full inline-block rounded-sm">
      <input
        className="w-full bg-transparent border-0 p-2.5 border-b border-border-gray focus:border-primary-dark focus:outline-none focus:ring-0 placeholder:text-border-gray"
        type="text"
        onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
        placeholder={placeholder}
      />
      <ul className="flex flex-wrap p-0 mt-2">
        {tags.map((tag, index) => (
          <Label
            key={index}
            divClassName="flex items-center h-[100%] font-[600]"
            tag={tag}
            id={index}
            onDelete={() => removeTags(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TagInput;
