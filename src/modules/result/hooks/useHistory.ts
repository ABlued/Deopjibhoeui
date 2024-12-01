import { create } from 'zustand';
import { History } from '../types/History';

type HistoryStore = {
  histories: History[];
  setHistories: (histories: History) => void;
};

export const useHistoryStore = create<HistoryStore>((set) => ({
  histories: [],
  setHistories: (histories: History) =>
    set((store) => ({
      histories: [...store.histories, histories]
    }))
}));
