export type MarkedPart = { text: string; mark: boolean };

export function splitMarked(text: string, marks: readonly string[]): MarkedPart[] {
  if (marks.length === 0) return [{ text, mark: false }];

  const ordered = [...marks].sort((a, b) => b.length - a.length);
  const pattern = ordered.map((mark) => mark.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|");
  const lookup = new Set(ordered.map((mark) => mark.toLowerCase()));

  return text
    .split(new RegExp(`(${pattern})`, "gi"))
    .filter((part) => part.length > 0)
    .map((part) => ({ text: part, mark: lookup.has(part.toLowerCase()) }));
}

export function filterByGroup<T extends { group: string }>(items: readonly T[], group: string): T[] {
  if (group === "All") return [...items];
  return items.filter((item) => item.group === group);
}
