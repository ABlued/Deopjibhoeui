import { UseInputState } from '../types/useInput';
import { useInput } from '../useInput';
import { renderHook, RenderResult } from '@testing-library/react-hooks';
import { act } from 'react-dom/test-utils';
import { titleValidator } from '../../utils/validator/titleValidator';
describe('useInput render', () => {
  let renderResult: RenderResult<
    UseInputState<{
      isError: boolean;
      message?: string;
    }>
  >;
  beforeEach(() => {
    const { result } = renderHook(() =>
      useInput({
        text: 'initial',
        initError: { isError: false, message: '' },
        validator: titleValidator
      })
    );
    renderResult = result;
  });

  test('Then: value should be "initial"', () => {
    expect(renderResult.current.value).toBe('initial');
    expect(renderResult.current.error).toStrictEqual({
      isError: false,
      message: ''
    });
  });

  describe('When: onChange is called with "new value"', () => {
    beforeEach(() => {
      act(() => {
        renderResult.current.onChange({ target: { value: 'new value' } });
      });
    });

    test('Then: value should be "new value"', () => {
      expect(renderResult.current.value).toBe('new value');
    });

    describe('When: onChange is called with ""', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.onChange('');
        });
      });

      test('Then: value should be "" and error should be { isError: true, message: 필수 항목입니다. } ', () => {
        expect(renderResult.current.value).toBe('');
        expect(renderResult.current.error).toStrictEqual({
          isError: true,
          message: '필수 항목입니다.'
        });
      });
    });
  });

  describe('When: onChangeError is called with { isError: true, message: "error message" }', () => {
    beforeEach(() => {
      renderResult.current.onChangeError({
        isError: true,
        message: 'error message'
      });
    });

    test('Then: error should be { isError: true, message: "error message" }', () => {
      expect(renderResult.current.error).toStrictEqual({
        isError: true,
        message: 'error message'
      });
    });
  });

  describe('When: reset is called', () => {
    beforeEach(() => {
      renderResult.current.reset();
    });

    test('Then: value should be "initial"', () => {
      expect(renderResult.current.value).toBe('initial');
    });

    test('Then: error should be { isError: false, message: "" }', () => {
      expect(renderResult.current.error).toStrictEqual({
        isError: false,
        message: ''
      });
    });
  });
});
