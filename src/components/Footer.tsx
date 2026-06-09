import { footerLinks } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-600 dark:text-slate-400 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <p className="font-medium text-slate-900 dark:text-white">
            Joao Victor Alves de Abreu
          </p>
          <p className="mt-1">
            Portfolio orientado a empregabilidade para estagio e vagas de Software Engineer Backend.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {footerLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
