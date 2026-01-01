import { useState } from 'react';
import { TargetCheckEvent } from '../../types/common/targetValue';
import { Identifiable } from '../../types/common/identifiable';

export interface HasSelection<T> {
  hasSelection: (id: T) => boolean;
}

export interface SelectionState<T extends Identifiable<unknown>>
  extends HasSelection<T> {
  isAllSelected: (items: T[]) => boolean;
  selectedItem: T[];
  onSelectedItems: (checkEvent: CheckEvent, items: T[]) => void;
  onSelectedItem: (isChecked: boolean, item: T) => void;
  clearSelections: () => void;
}

type CheckEvent = TargetCheckEvent | boolean;

const castCheckEvent = (event: CheckEvent): boolean => {
  return (event as TargetCheckEvent)?.target?.checked ?? event;
};

export interface useTableSelectionProps<T> {
  items?: T[];
}

export function useTableSelection<Key, T extends Identifiable<Key>>({
  items
}: useTableSelectionProps<T>): SelectionState<T> {
  const [selectedItem, setSelectedItem] = useState<T[]>(items ?? []);

  const isAllSelected = (items: T[]): boolean => {
    const ids = items.map((item) => item.id);

    return (
      ids.length > 0 &&
      selectedItem.filter((select) => ids.includes(select.id)).length ===
        ids.length
    );
  };

  const onSelectedItems = (checkEvent: CheckEvent, items: T[]) => {
    const isChecked = castCheckEvent(checkEvent);
    if (isChecked) {
      setSelectedItem((prev) => {
        const addItem = [...prev, ...items];
        return addItem.filter(
          (character, idx, arr) =>
            arr.findIndex((item) => item.id === character.id) === idx
        );
      });
    } else {
      const itemsIds = items.map((item) => item.id);
      setSelectedItem((prev) =>
        prev.filter((selected) => !itemsIds.includes(selected.id))
      );
    }
  };

  const onSelectedItem = (checkEvent: CheckEvent, item: T) => {
    const isChecked = castCheckEvent(checkEvent);
    if (isChecked) {
      if (!hasSelection(item)) {
        setSelectedItem((prevSelected) => [...prevSelected, item]);
      }
    } else {
      if (hasSelection(item)) {
        setSelectedItem((prevSelected) => {
          return prevSelected.filter((pre) => pre.id !== item.id);
        });
      }
    }
  };

  const hasSelection = (item: T): boolean => {
    return selectedItem.filter((target) => target.id === item.id).length > 0;
  };

  const clearSelections = () => {
    setSelectedItem([]);
  };

  return {
    isAllSelected,
    selectedItem,
    hasSelection,
    onSelectedItems,
    onSelectedItem,
    clearSelections
  };
}
