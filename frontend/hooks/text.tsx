import { useStore } from "@/state/store";

import "../app/globals.css";
/** Highlights text that is part of the current search */
export const useParse = () => {
  const { query } = useStore();
  const regEscape = (v: string) =>
    v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

  return (text?: string | null) => {
    if (!query) return text;
    const chunks = text?.split(new RegExp(`(${regEscape(query)})`, "ig"));
    const regex = new RegExp(regEscape(query), "ig");
    return chunks?.map((chunk, i) => {
      return (
        <span key={`${text}-${chunk}-${Math.random()}`}>
          {regex.test(chunk) ? (
            <span className="bg-yellow-800">{chunk}</span>
          ) : (
            <span>{chunk}</span>
          )}
        </span>
      );
    });
  };
};
