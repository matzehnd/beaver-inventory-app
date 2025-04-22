export const dateAsFormattedDay = (date: Date | undefined): string =>
  date
    ? date.toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : "-";
