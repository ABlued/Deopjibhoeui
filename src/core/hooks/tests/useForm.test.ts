import { act, renderHook, RenderResult } from '@testing-library/react-hooks';
import { useForm, UseFormResult } from '../useForm';
import { emptyValidator } from '../../utils/validator/emptyValidator';
describe('useForm', () => {
  describe('Given require', () => {
    let renderResult: RenderResult<
      UseFormResult<{ name: string; email: string }>
    >;
    beforeEach(() => {
      const { result } = renderHook(() =>
        useForm({
          onSubmit: () => {},
          initialValues: {
            name: '',
            email: ''
          },
          requires: {
            name: true
          },
          validators: {
            name: emptyValidator,
            email: emptyValidator
          }
        })
      );
      renderResult = result;
    });

    describe('When: 초기 상태', () => {
      test('Then: isValid[false]', () => {
        expect(renderResult.current.isValid()).toBe(false);
        expect(renderResult.current.formProps.name.error?.isError).toBe(false);
        expect(renderResult.current.formProps.email.error?.isError).toBe(false);
      });
    });

    describe('When: email 만 입력하면', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.onChange({
            target: { name: 'email', value: 'test@test.co.kr' }
          });
        });
      });
      test('Then: isValid[false]', () => {
        expect(renderResult.current.isValid()).toBe(false);
        expect(renderResult.current.formProps.name.error?.isError).toBe(false);
        expect(renderResult.current.formProps.email.error?.isError).toBe(false);
      });
    });

    describe('When: name 을 입력하면', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.onChange({
            target: { name: 'name', value: 'test' }
          });
        });
      });
      test('Then: isValid[true]', () => {
        expect(renderResult.current.isValid()).toBe(true);
        expect(renderResult.current.formProps.name.error?.isError).toBe(false);
        expect(renderResult.current.formProps.email.error?.isError).toBe(false);
      });
    });

    describe('When: name 입력 후 초기화', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.onChange({
            target: { name: 'name', value: 'test' }
          });
          renderResult.current.reset();
        });
      });
      test('Then: isValid[false]', () => {
        expect(renderResult.current.isValid()).toBe(false);
        expect(renderResult.current.formProps.name.error?.isError).toBe(false);
        expect(renderResult.current.formProps.email.error?.isError).toBe(false);
      });
    });
  });

  describe('Given require 가 없는 경우', () => {
    let renderResult: RenderResult<
      UseFormResult<{ name: string; email: string }>
    >;
    beforeEach(() => {
      const { result } = renderHook(() =>
        useForm({
          onSubmit: () => {},
          initialValues: {
            name: '',
            email: '',
            optionEmail: ''
          },
          validators: {
            optionEmail: emptyValidator,
            name: emptyValidator
          }
        })
      );
      renderResult = result;
    });

    describe('When: email 만 입력하면', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.onChange({
            target: { name: 'email', value: 'test@test.co.kr' }
          });
        });
      });
      test('Then: isValid[true]', () => {
        expect(renderResult.current.isValid()).toBe(true);
      });
    });

    describe('When: name 을 입력하면', () => {
      beforeEach(() => {
        act(() => {
          renderResult.current.onChange({
            target: { name: 'name', value: 'test' }
          });
        });
      });
      test('Then: isValid[true]', () => {
        expect(renderResult.current.isValid()).toBe(true);
      });
    });

    describe('optionEmail', () => {
      describe('When: optionEmail 빈값을 입력하면', () => {
        beforeEach(() => {
          act(() => {
            renderResult.current.onChange({
              target: { name: 'optionEmail', value: '' }
            });
          });
        });
        test('Then: isValid [true]', () => {
          expect(renderResult.current.isValid()).toBe(true);
        });
      });
    });
  });
});
