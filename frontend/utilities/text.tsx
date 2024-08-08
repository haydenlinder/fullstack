/** Highlights text that is part of the current search */
export const parse = (text?: string, query?: string) => {
  if (!query) return text;
  const regEscape = (v: string) =>
    v.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

  const chunks = text?.split(new RegExp(`(${regEscape(query)})`, "ig"));
  const regex = new RegExp(regEscape(query), "ig");

  return chunks?.map((chunk, i) => {
    return (
      <>
        {regex.test(chunk) ? (
          <span key={`${chunk}-${Math.random()}`} className="bg-yellow-800">
            {chunk}
          </span>
        ) : (
          <span key={`${chunk}-${Math.random()}`}>{chunk}</span>
        )}
      </>
    );
  });
};
