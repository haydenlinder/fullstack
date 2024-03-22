import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface QueryState {
  query: string;
  update: (query: string) => void;
}

interface ModalState {
  isOpen: boolean;
  update: (isOpen: boolean) => void;
}

export const useStore = create<QueryState>()(
  devtools(
    persist(
      (set) => ({
        query: "",
        update: (query) => set(() => ({ query })),
      }),
      {
        name: "query-storage",
      },
    ),
  ),
);

export const useModalStore = create<ModalState>()(
  devtools(
    persist(
      (set) => ({
        isOpen: false,
        update: (isOpen) => set(() => ({ isOpen })),
      }),
      {
        name: "query-storage",
      },
    ),
  ),
);
