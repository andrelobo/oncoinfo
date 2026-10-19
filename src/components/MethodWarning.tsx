export function MethodWarning({ message }: { message: string }) {
  return (
    <aside
      role="note"
      className="border border-amber-300 border-l-4 border-l-amber-500 bg-amber-50 px-4 py-3"
    >
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-amber-800">
        Aviso de método
      </p>
      <p className="mt-1 text-sm text-amber-900">{message}</p>
    </aside>
  );
}
