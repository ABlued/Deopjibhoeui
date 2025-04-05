import { act, renderHook, RenderResult } from '@testing-library/react-hooks';
import { Identifiable } from '../../../types/common/identifiable';
import { SelectionState, useTableSelection } from '../useTableSelection';

type TestType = Identifiable<string>;

const testItems: TestType[] = [
  {
    id: 'A'
  },
  {
    id: 'B'
  },
  {
    id: 'C'
  }
];

const addItem: TestType = {
  id: 'D'
};

const addTestItems = [...testItems, addItem];

describe('useTableSelection', () => {
  let renderResult: RenderResult<SelectionState<TestType>>;
  describe('Given: render useTableSelection', () => {
    beforeEach(() => {
      const { result } = renderHook(() =>
        useTableSelection<string, TestType>({})
      );
      renderResult = result;
    });

    test('Then: isAllSelected should return false if the item list is empty', () => {
      const emptyArray: TestType[] = [];
      expect(renderResult.current.isAllSelected(emptyArray)).toBe(false);
    });

    describe('When: isCheckable is false for admin or sub-admin', () => {
      const testItem: TestType = { id: 'B' };
      beforeEach(() => {
        act(() => {
          renderResult.current.onSelectedItem(false, testItem);
        });
      });
      test('Then: the item should not be selectable', () => {
        expect(renderResult.current.selectedItem).toEqual([]);
      });
    });

    describe('When: an arbitrary cell is selected', () => {
      const testSelectOne: TestType = { id: 'B' };
      beforeEach(() => {
        act(() => {
          renderResult.current.onSelectedItem(true, testSelectOne);
        });
      });
      test('Then: the selected cell should be marked as selected', () => {
        expect(renderResult.current.selectedItem).toEqual([testSelectOne]);
      });

      describe('When: previously selected cell is deselected', () => {
        beforeEach(() => {
          act(() => {
            renderResult.current.onSelectedItem(false, testSelectOne);
          });
        });
        test('Then: the previously selected cell should be deselected', () => {
          expect(renderResult.current.selectedItem).toEqual([]);
        });
      });
    });

    describe('When: all cells are individually selected', () => {
      beforeEach(() => {
        act(() => {
          testItems.forEach((element) => {
            renderResult.current.onSelectedItem(true, element);
          });
        });
      });

      test('Then: all cells should be selected', () => {
        expect(renderResult.current.isAllSelected(testItems)).toEqual(true);
      });
      describe('When: one of the cells is deselected', () => {
        beforeEach(() => {
          act(() => {
            renderResult.current.onSelectedItem(false, testItems[0]);
          });
        });
        test('Then: isAllSelected should return false', () => {
          expect(renderResult.current.isAllSelected(testItems)).toEqual(false);
        });
      });
    });

    describe('When: header cell is selected', () => {
      const filterCheckableItems = testItems;

      beforeEach(() => {
        act(() => {
          renderResult.current.onSelectedItems(
            { target: { checked: true } },
            testItems
          );
        });
      });
      test('Then: all cells should be selected excluding admin and sub-admin', () => {
        expect(renderResult.current.selectedItem).toEqual(filterCheckableItems);
      });

      describe('When: header cell is deselected', () => {
        beforeEach(() => {
          act(() => {
            renderResult.current.onSelectedItems(
              { target: { checked: false } },
              testItems
            );
          });
        });
        test('Then: all cells should be deselected', () => {
          expect(renderResult.current.selectedItem).toEqual([]);
        });
      });
    });

    describe('Select all in grouped dialog list (admin, sub-admin, supporter)', () => {
      describe('Given: ', () => {
        beforeEach(() => {
          const { result } = renderHook(() =>
            useTableSelection<string, TestType>({ items: testItems })
          );
          renderResult = result;
        });

        describe('When: all are selected', () => {
          beforeEach(() => {
            act(() => {
              renderResult.current.onSelectedItems(
                { target: { checked: true } },
                addTestItems
              );
            });
          });

          test('Then: there should be no duplicate items', () => {
            expect(renderResult.current.selectedItem).toEqual(addTestItems);
          });
        });
      });
    });

    describe('Deselect all in grouped dialog list (admin, sub-admin, supporter)', () => {
      describe('Given: ', () => {
        beforeEach(() => {
          const { result } = renderHook(() =>
            useTableSelection<string, TestType>({ items: addTestItems })
          );
          renderResult = result;
        });

        describe('When: all are deselected', () => {
          beforeEach(() => {
            act(() => {
              renderResult.current.onSelectedItems(
                { target: { checked: false } },
                testItems
              );
            });
          });

          test('Then: only the matching data should be removed', () => {
            expect(renderResult.current.selectedItem).toEqual([addItem]);
          });
        });
      });
    });
  });
});
