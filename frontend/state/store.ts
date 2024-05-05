import { Status_Types_Enum } from "@/src/gql/graphql";
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

interface ModalState {
  openModal: null | ModalTypes;
  update: (modal: null | ModalTypes) => void;
}

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

interface FilterState {
  type: Status_Types_Enum;
  update: (type: Status_Types_Enum) => void;
}

export const useFilterStore = create<FilterState>()(
  devtools(
    persist(
      (set) => ({
        type: Status_Types_Enum.New,
        update: (type) => set(() => ({ type })),
      }),
      {
        name: "filter-storage",
      },
    ),
  ),
);
