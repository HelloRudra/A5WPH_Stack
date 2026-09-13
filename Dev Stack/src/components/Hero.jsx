export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">Development Stack</span>
        </h1>
        <p className="mt-6 max-w-md text-base text-slate-500 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="btn-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white"
          >
            Explore Technologies
          </a>
          <a
            href="#"
            className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 hover:border-slate-300"
          >
            Learn More
          </a>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <svg
          viewBox="0 0 300 260"
          className="w-64 sm:w-80 md:w-full md:max-w-sm"
          role="img"
          aria-label="Illustration of a stylized tech cube"
        >
          <defs>
            <linearGradient id="cubeTop" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="cubeSide" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#7c3aed" />
              <stop offset="100%" stopColor="#4c1d95" />
            </linearGradient>
          </defs>
          <polygon points="150,20 260,80 150,140 40,80" fill="url(#cubeTop)" opacity="0.9" />
          <polygon points="40,80 150,140 150,230 40,170" fill="url(#cubeSide)" opacity="0.85" />
          <polygon points="260,80 150,140 150,230 260,170" fill="#6d28d9" opacity="0.7" />
          <circle cx="150" cy="80" r="18" fill="#fff" opacity="0.9" />
          <text x="150" y="86" textAnchor="middle" fontSize="14" fontWeight="700" fill="#7c3aed">
            Aa
          </text>
        </svg>
      </div>
    </section>
  );
}
