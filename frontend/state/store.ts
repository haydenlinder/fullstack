import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface QueryState {
  query: string;
  update: (query: string) => void;
}

export const useQueryStore = create<QueryState>()(
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
