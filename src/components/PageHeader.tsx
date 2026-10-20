export function PageHeader({
  eyebrow,
  title,
  lead,
  meta,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  meta?: string;
}) {
  return (
    <header className="pb-6">
      {eyebrow ? <p className="label mb-2">{eyebrow}</p> : null}
      <h1 className="font-serif text-3xl font-semibold text-ink sm:text-4xl">
        {title}
      </h1>
      {lead ? <p className="prose-lead mt-3">{lead}</p> : null}
      {meta ? (
        <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.1em] text-faint">
          {meta}
        </p>
      ) : null}
      <div className="mt-6 border-t-2 border-brand-blue" />
    </header>
  );
}
