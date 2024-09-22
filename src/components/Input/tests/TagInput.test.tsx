import { render, screen } from '@testing-library/react';
import TagInput from '../TagInput';
import { InputTag } from '../../../core/hooks/types/useTagInput';
const renderComponent = (tags: InputTag[]) => {
  render(
    <TagInput
      addTags={jest.fn()}
      removeTags={jest.fn()}
      tags={tags}
      placeholder="test"
    />
  );
  const input = screen.getByPlaceholderText('test');
  return {
    input
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
});
