import { create } from 'zustand';

type TitleStore = {
  title: string;
  setTitle: (title: string) => void;
};

export const useTitleStore = create<TitleStore>((set) => ({
  title: '',
  setTitle: (title: string) => set(() => ({ title }))
}));
