import { useTagInput } from '../useTagInput';
import { UseTagInput } from '../types/useTagInput';
import { act } from 'react-dom/test-utils';
import { renderHook, RenderResult } from '@testing-library/react-hooks';

describe('given: useTagInput is called', () => {
  let renderResult: RenderResult<UseTagInput>;

  beforeEach(() => {
    const { result } = renderHook(() => useTagInput());
    renderResult = result;
  });

  test('then: tags should be empty', () => {
    expect(renderResult.current.tags).toEqual([]);
  });

  describe('when: addTags is called with "test"', () => {
    beforeEach(() => {
      act(() => {
        renderResult.current.addTags({
          key: 'Enter',
          currentTarget: { value: 'test' }
        } as React.KeyboardEvent<HTMLInputElement>);
      });
    });

    test('then: tags should contain "test"', () => {
      expect(renderResult.current.tags).toEqual(['test']);
    });
    describe('when: removeTags is called with 0', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.removeTags(0);
        });
      });

      test('then: tags should be empty', () => {
        expect(renderResult.current.tags).toEqual([]);
      });
    });
  });
  describe('when: addTags is called with "test" and key is not "Enter"', () => {
    beforeEach(() => {
      act(() => {
        renderResult.current.addTags({
          key: 'Tab',
          currentTarget: { value: 'test' }
        } as React.KeyboardEvent<HTMLInputElement>);
      });
    });

    test('then: tags should be empty', () => {
      expect(renderResult.current.tags).toEqual([]);
    });
  });
});
