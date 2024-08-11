import React from 'react';
import styles from './TagInput.css';
import { ReactComponent as RemoveIcon } from '../../assets/svg/RemoveIcon.svg';
import { InputTag } from '../../core/hooks/types/useTagInput';

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
    <div className={styles}>
      <div className="tags-input">
        <input
          className="tags-input-field"
          type="text"
          onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
          placeholder={placeholder}
        />
        <ul id="tags">
          {tags.map((tag, index) => (
            <li key={index} className="tag">
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                <RemoveIcon />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TagInput;
