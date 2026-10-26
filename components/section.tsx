export function Section({
  id,
  title,
  hint,
  aside,
  children,
  align = "left",
  className = "",
}: {
  id?: string;
  title: string;
  hint?: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-6 px-4 py-6 sm:px-5 ${className}`}>
      <div className="rule-x -mx-4 mb-6 sm:-mx-5" aria-hidden="true" />
      {align === "center" ? (
        <h2 className="text-center font-serif text-[1.7rem] leading-none tracking-tight text-fg">{title}</h2>
      ) : (
        <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-serif text-[1.7rem] leading-none tracking-tight text-fg">
            {title}
            {hint ? <span className="ml-2 align-middle font-mono text-xs font-normal text-faint">{hint}</span> : null}
          </h2>
          {aside}
        </div>
      )}
      {children}
    </section>
  );
}
