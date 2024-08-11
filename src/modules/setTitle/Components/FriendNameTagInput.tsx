import React from 'react';
import SubPlaceholder from '../../../components/Input/SubPlaceholder';
import { useTagInput } from '../../../core/hooks/useTagInput';
import TagInput, { TagInputProps } from '../../../components/Input/TagInput';

function FriendNameTagInput(props: Pick<TagInputProps, 'placeholder'>) {
  const tagInput = useTagInput();
  return (
    <div>
      <TagInput {...tagInput} {...props} />
      {tagInput.tags.length === 0 && (
        <SubPlaceholder text={'각 친구들의 이름은 ‘Enter’키로 구분해요.'} />
      )}
    </div>
  );
}

export default FriendNameTagInput;
