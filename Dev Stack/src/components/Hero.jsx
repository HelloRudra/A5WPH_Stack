import banner from "../assets/banner-stack.png";

export default function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1fr_1.2fr] md:py-24 lg:px-8">
      
      {/* Left Content */}
      <div>
        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Build Your Ideal
          <br />
          <span className="brand-gradient-text">
            Development Stack
          </span>
        </h1>

        <p className="mt-6 max-w-md text-base text-slate-500 sm:text-lg">
          Explore frontend, backend, database, and tooling options, compare
          them side by side, and put together the stack that fits your next
          project.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#technologies"
            className="btn-gradient rounded-lg px-6 py-3 text-sm font-semibold text-white"
          >
            Explore Technologies
          </a>

          <a
            href="#"
            className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center md:justify-end">
        <img
          src={banner}
          alt="Stylized illustration of a layered tech stack"
          className="w-full max-w-xl object-contain"
        />
      </div>

    </section>
  );
}