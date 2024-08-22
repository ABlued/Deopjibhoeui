import { create } from 'zustand';

type FriendsNameStore = {
  names: string[];
  setNames: (names: string[]) => void;
};

export const useFriendsNameStore = create<FriendsNameStore>((set) => ({
  names: [],
  setNames: (names: string[]) => set(() => ({ names }))
}));
