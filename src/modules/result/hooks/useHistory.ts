import { create } from 'zustand';
import { History } from '../types/History';

type HistoryStore = {
  histories: History[];
  setHistoriesByKey: <K extends keyof History>(
    index: number,
    key: K,
    value: History[K]
  ) => void;
  pushHistories: (histories: History) => void;
};

export const useHistoryStore = create<HistoryStore>((set) => ({
  histories: [],
  pushHistories: (histories: History) =>
    set((store) => ({
      histories: [...store.histories, histories]
    })),
  setHistoriesByKey: <K extends keyof History>(
    index: number,
    key: K,
    value: History[K]
  ) =>
    set((store) => {
      const newHistories = [...store.histories];
      newHistories[index] = {
        ...newHistories[index],
        [key]: value
      };
      return {
        histories: newHistories
      };
    })
}));
