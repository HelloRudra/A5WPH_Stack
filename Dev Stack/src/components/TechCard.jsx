export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="flex flex-col rounded-2xl border border-slate-200 p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <img src={icon} alt={name} className="h-9 w-9" loading="lazy" />
        <span className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
          {badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs">
        <span className="rounded-md bg-slate-100 px-2 py-1 font-medium text-slate-600">
          {category}
        </span>
        <span className="text-slate-500">{difficulty}</span>
        <span className="ml-auto flex items-center gap-1 font-medium text-slate-700">
          <span className="text-amber-400">★</span>
          {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(tech)}
        disabled={isAdded}
        className={`mt-4 w-full rounded-lg py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-emerald-50 text-emerald-600"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
