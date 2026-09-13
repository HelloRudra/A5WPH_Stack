import TechCard from "./TechCard";
import YourStack from "./YourStack";

export default function TechnologySection({
  technologies,
  loading,
  stack,
  onAdd,
  onRemove,
  onRemoveAll,
}) {
  return (
    <section id="technologies" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
        Explore the <span className="brand-gradient-text">Technologies</span>
      </h2>
      <p className="mt-2 text-slate-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
        {loading ? (
          <div className="flex min-h-[240px] items-center justify-center rounded-2xl border border-slate-200 sm:col-span-1">
            <div className="flex items-center gap-3 text-slate-500">
              <span className="h-5 w-5 animate-spin rounded-full border-2 border-slate-300 border-t-pink-500" />
              Loading technologies...
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                onAdd={onAdd}
              />
            ))}
          </div>
        )}

        <YourStack stack={stack} onRemove={onRemove} onRemoveAll={onRemoveAll} />
      </div>
    </section>
  );
}
