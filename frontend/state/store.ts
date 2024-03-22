import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface QueryState {
  query: string;
  update: (query: string) => void;
}
export enum ModalTypes {
  LOGIN = "LOGIN",
  MENU = "MENU",
}

interface ModalState {
  openModal: null | ModalTypes;
  update: (modal: null | ModalTypes) => void;
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
        openModal: null,
        update: (openModal) => set(() => ({ openModal })),
      }),
      {
        name: "query-storage",
      },
    ),
  ),
);
