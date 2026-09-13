export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-slate-200 p-5 lg:sticky lg:top-24">
      <h3 className="text-base font-bold text-slate-900">Your Stack</h3>
      <p className="mt-1 text-sm text-slate-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="mt-6 text-sm text-slate-400">
          You haven't added any technology yet. Pick a card to start
          building your stack.
        </p>
      ) : (
        <div className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <div
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-slate-100 p-3"
            >
              <img src={tech.icon} alt={tech.name} className="h-8 w-8 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-900">
                  {tech.name}
                </p>
                <p className="text-xs text-slate-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="shrink-0 rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-100 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
}
