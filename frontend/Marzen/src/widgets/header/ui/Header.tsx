const NAV = ["Dashboard", "Markets", "Portfolio", "Insights"] as const;

export const Header = () => {
  return (
    <header className="scheme-light fixed top-0 left-0 z-50 w-full border-b border-slate-200/90 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-4 px-8">
        <button
          type="button"
          className="group flex cursor-pointer items-center gap-3 rounded-lg outline-none ring-indigo-500/40 focus-visible:ring-2"
          aria-label="Marzen, home"
        >
          <span
            className="flex h-10 w-10 rotate-3 items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-indigo-500 font-black text-xl text-white transition-transform duration-300 group-hover:rotate-0"
            aria-hidden="true"
          >
            M
          </span>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">
            Marzen
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="rounded-full px-5 py-2 text-[15px] font-semibold text-slate-500 transition-all duration-200 hover:bg-indigo-50/50 hover:text-indigo-600"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-6">
          <button
            type="button"
            className="cursor-pointer rounded-full bg-linear-to-br from-indigo-600 to-indigo-500 px-6 py-2.5 text-[15px] font-bold text-white shadow-[0_10px_28px_-6px_rgba(79,70,229,0.45)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_-6px_rgba(79,70,229,0.55)] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-indigo-500/60 focus-visible:ring-offset-2 focus-visible:outline-none"
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
};
