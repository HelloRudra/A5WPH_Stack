import { useState } from "react";
import logo from "../assets/logo-text.png";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandLogo() {
  return <img src={logo} alt="Dev Stack" className="h-8 w-auto sm:h-9" />;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Mobile: hamburger */}
        <button
          className="flex items-center justify-center rounded-md p-2 text-slate-700 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>

        {/* Logo */}
        <div className="md:flex-none">
          <BrandLogo />
        </div>

        {/* Center nav links - desktop only */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`text-sm font-medium transition-colors ${
                i === 0
                  ? "text-pink-600"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#"
            className="hidden text-sm font-medium text-slate-700 hover:text-slate-900 sm:block"
          >
            Sign In
          </a>

          <a
            href="#"
            className="btn-gradient rounded-full px-4 py-2 text-sm font-semibold text-white sm:px-5"
          >
            Sign Up
          </a>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav className="border-t border-slate-100 bg-white px-4 py-3 md:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={link}>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm font-medium ${
                    i === 0
                      ? "text-pink-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}