import React from 'react';
import { InputTag, UseTagInput } from './types/useTagInput';

export const useTagInput = (): UseTagInput => {
  const [tags, setTags] = React.useState<InputTag[]>([]);

  const addTags = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && event.currentTarget.value !== '') {
      setTags([...tags, event.currentTarget.value]);
      event.currentTarget.value = '';
    }
  };

  const removeTags = (index: number) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };

  return {
    tags,
    addTags,
    removeTags
  };
};
