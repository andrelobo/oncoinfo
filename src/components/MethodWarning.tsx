export function MethodWarning({ message }: { message: string }) {
  return (
    <aside
      role="note"
      className="border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-sm text-amber-900"
    >
      <p className="font-semibold">Aviso de método</p>
      <p className="mt-1">{message}</p>
    </aside>
  );
}
