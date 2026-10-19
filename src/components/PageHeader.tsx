export function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="space-y-3">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h1 className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
        {title}
      </h1>
      {lead ? <p className="lede">{lead}</p> : null}
    </header>
  );
}
