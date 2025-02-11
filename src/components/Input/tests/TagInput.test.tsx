import { render, screen, fireEvent } from '@testing-library/react';
import TagInput from '../TagInput';
import { InputTag } from '../../../core/hooks/types/useTagInput';

const renderComponent = (tags: InputTag[]) => {
  const addFn = jest.fn();
  const deleteFn = jest.fn();
  render(
    <TagInput
      addTags={addFn}
      removeTags={deleteFn}
      tags={tags}
      placeholder="test"
    />
  );
  const input = screen.getByPlaceholderText('test');
  return {
    input,
    addFn,
    deleteFn
  };
};

describe('Given: renderTagInput', () => {
  test('When: renderTagInput is called', () => {
    const { input } = renderComponent([]);
    expect(input).toBeInTheDocument();
  });
});

describe('When: input is "아이스크림" and Enter key is pressed', () => {
  test('Then: render "아이스크림" label', () => {
    const initTags = '아이스크림';
    renderComponent([initTags]);
    expect(screen.getByText(initTags)).toBeInTheDocument();
  });
  describe('When: remove button is clicked', () => {
    test('Then: remove button should remove tag', () => {
      const deleteIndex = 0;
      const initTags = '아이스크림';
      const { deleteFn } = renderComponent([initTags]);
      const removeButton = screen.getByRole('button');
      fireEvent.click(removeButton);
      expect(deleteFn).toHaveBeenCalledTimes(1);
      expect(deleteFn).toHaveBeenCalledWith(deleteIndex);
    });
  });
});
