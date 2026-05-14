export const Hero = () => {
    return (
      <section className="relative box-border flex min-h-dvh w-full items-center overflow-hidden bg-white pt-20">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-indigo-100/80 blur-[120px]" />
          <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-50 blur-[80px]" />
        </div>
  
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.15) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0,0,0,0.15) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
  
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-8 py-10">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
              <span className="text-sm font-semibold text-indigo-600 tracking-wide">
                Smart investing platform
              </span>
            </div>
  
            {/* Headline */}
            <h1 className="text-6xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
              Invest smarter,{" "}
              <span className="bg-linear-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                grow faster
              </span>
            </h1>
  
            {/* Subtext */}
            <p className="text-xl text-slate-500 leading-relaxed mb-10 max-w-xl">
              Track your portfolio, discover top-performing stocks, and make
              data-driven decisions — all in one place.
            </p>
  
            {/* CTA */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                className="rounded-full bg-linear-to-br from-indigo-600 to-indigo-500 px-8 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_28px_-6px_rgba(79,70,229,0.45)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_-6px_rgba(79,70,229,0.55)] active:scale-[0.98]"
              >
                Get started free
              </button>
              <button
                type="button"
                className="rounded-full border border-slate-200 px-8 py-3.5 text-[15px] font-bold text-slate-600 transition-all duration-200 hover:border-slate-300 hover:text-slate-900"
              >
                See how it works
              </button>
            </div>
  
            {/* Stats */}
            <div className="flex items-center gap-10 mt-16 pt-10 border-t border-slate-100">
              {[
                { value: "$2.4B+", label: "Assets tracked" },
                { value: "180K+", label: "Active investors" },
                { value: "4,200+", label: "Stocks covered" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };