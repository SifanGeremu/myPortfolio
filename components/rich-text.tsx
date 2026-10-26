import { splitMarked } from "@/lib/portfolio";

export function RichText({ text, marks }: { text: string; marks: readonly string[] }) {
  const parts = splitMarked(text, marks);
  return (
    <>
      {parts.map((part, index) =>
        part.mark ? (
          <span key={index} className="text-fg underline decoration-fg/80 underline-offset-[3px]">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </>
  );
}
