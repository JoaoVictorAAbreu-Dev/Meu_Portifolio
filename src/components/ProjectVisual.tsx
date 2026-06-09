type ProjectVisualProps = {
  label: string;
};

export function ProjectVisual({ label }: ProjectVisualProps) {
  return (
    <div
      className="relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-[linear-gradient(180deg,rgba(248,250,252,0.98),rgba(226,232,240,0.88))] p-5 shadow-[0_20px_50px_rgba(148,163,184,0.12)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.96),rgba(8,15,30,0.96))]"
      aria-hidden="true"
    >
      <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-brand-500/15 blur-3xl dark:bg-cyan-400/15" />
      <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-300/25 blur-3xl dark:bg-brand-500/15" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-400" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-400" />
          </div>
          <span className="rounded-full border border-slate-200/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-400">
            Portfolio View
          </span>
        </div>
        <div className="rounded-[1.35rem] border border-slate-200/80 bg-white/85 p-4 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-brand-600 dark:text-cyan-300">
              {label}
            </p>
            <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">
              Case Study
            </span>
          </div>
          <div className="mt-5 grid gap-3">
            <div className="grid grid-cols-[1.5fr_0.7fr] gap-3">
              <div className="rounded-[1.1rem] border border-slate-200/70 bg-slate-50/90 p-4 dark:border-white/10 dark:bg-slate-950/30">
                <div className="h-3 w-2/3 rounded-full bg-slate-200 dark:bg-white/10" />
                <div className="mt-4 h-20 rounded-2xl bg-gradient-to-br from-brand-500/15 via-cyan-300/20 to-slate-200/70 dark:from-brand-500/20 dark:via-cyan-300/10 dark:to-white/5" />
              </div>
              <div className="grid gap-3">
                <div className="rounded-[1.1rem] border border-slate-200/70 bg-white/90 p-3 dark:border-white/10 dark:bg-white/5">
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                  <div className="mt-3 h-10 rounded-xl bg-slate-100 dark:bg-white/5" />
                </div>
                <div className="rounded-[1.1rem] border border-slate-200/70 bg-white/90 p-3 dark:border-white/10 dark:bg-white/5">
                  <div className="h-2 rounded-full bg-slate-200 dark:bg-white/10" />
                  <div className="mt-3 h-10 rounded-xl bg-slate-100 dark:bg-white/5" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="h-16 rounded-2xl bg-slate-100 dark:bg-white/5" />
              <div className="h-16 rounded-2xl bg-slate-100 dark:bg-white/5" />
              <div className="h-16 rounded-2xl bg-gradient-to-r from-brand-500/10 to-cyan-300/20 dark:from-brand-500/20 dark:to-cyan-300/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
