import type { ReactNode } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_20%),linear-gradient(180deg,#020617_0%,#0f172a_48%,#020617_100%)] dark:text-white">
      <a
        href="#conteudo-principal"
        className="absolute left-4 top-4 z-[60] -translate-y-20 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white transition focus:translate-y-0 dark:bg-white dark:text-slate-950"
      >
        Pular para o conteudo
      </a>
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(rgba(148,163,184,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.10)_1px,transparent_1px)] bg-[length:64px_64px] opacity-[0.18] dark:opacity-[0.08]" />
      <div className="relative">
        <Header />
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
