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