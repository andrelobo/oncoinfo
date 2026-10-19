export function MethodWarning({ message }: { message: string }) {
  return (
    <aside
      role="note"
      className="relative overflow-hidden rounded-r-xl border-l-4 border-amber-400 bg-amber-400/10 px-4 py-3 text-sm text-amber-100"
    >
      <p className="flex items-center gap-2 font-semibold text-amber-200">
        <span
          aria-hidden="true"
          className="inline-block h-2 w-2 rounded-full bg-amber-400"
        />
        Aviso de método
      </p>
      <p className="mt-1 text-amber-100/90">{message}</p>
    </aside>
  );
}
