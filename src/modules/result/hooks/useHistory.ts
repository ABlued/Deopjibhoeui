import { create } from 'zustand';
import { History } from '../types/History';

type HistoryStore = {
  histories: History[];
  pushHistories: (histories: History) => void;
};

export const useHistoryStore = create<HistoryStore>((set) => ({
  histories: [],
  pushHistories: (histories: History) =>
    set((store) => ({
      histories: [...store.histories, histories]
    }))
}));
