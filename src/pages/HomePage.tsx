import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { ProjectVisual } from "../components/ProjectVisual";
import { SectionHeading } from "../components/SectionHeading";
import {
  aboutPoints,
  certifications,
  contactLinks,
  featuredRepositories,
  githubInsights,
  heroMetrics,
  highlights,
  projects,
  quickProfile,
  skillCategories,
  timeline,
} from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import { buildMailtoLink } from "../services/contact";
import { usePageMeta } from "../utils/meta";

export function HomePage() {
  usePageMeta({
    title: "Joao Victor Alves de Abreu | Software Engineering Student",
    description:
      "Portfolio profissional com foco em backend Java, C#, .NET, APIs REST, banco de dados e arquitetura de software.",
  });

  return (
    <MainLayout>
      <section className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-28 lg:pt-20">
        <div className="flex flex-col justify-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="eyebrow"
          >
            Software portfolio orientado a contratacao
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl"
          >
            Joao Victor Alves de Abreu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-6 text-xl text-slate-700 dark:text-slate-200 sm:text-2xl"
          >
            Software Engineering Student | Backend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300"
          >
            Desenvolvendo solucoes escalaveis com foco em Java, C#, .NET e arquitetura de software.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="https://github.com/JoaoVictorAAbreu-Dev" target="_blank" rel="noreferrer" className="btn-primary">
              <FiGithub />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
            >
              <FiLinkedin />
              LinkedIn
            </a>
            <a href="/curriculo-joao-victor.pdf" download className="btn-secondary">
              <FiDownload />
              Curriculo
            </a>
            <a href="#projetos" className="btn-secondary">
              <FiArrowRight />
              Projetos
            </a>
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {heroMetrics.map((item, index) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * index }}
                className="glass-card"
              >
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.note}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-6">
          <ProfilePhoto />
          <div className="glass-card">
            <p className="eyebrow">Snapshot profissional</p>
            <div className="mt-5 grid gap-4">
              {quickProfile.map((item) => (
                <div key={item.label} className="flex flex-col gap-1 border-b border-slate-200/80 pb-4 last:border-0 last:pb-0 dark:border-white/10">
                  <span className="text-sm text-slate-500 dark:text-slate-400">{item.label}</span>
                  <span className="font-medium text-slate-900 dark:text-white">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-shell">
        <SectionHeading
          eyebrow="Sobre mim"
          title="Portfolio pensado para mostrar maturidade tecnica, capacidade analitica e potencial real de crescimento."
          description="A proposta aqui nao e apenas apresentar projetos, mas comunicar criterio de engenharia, clareza de raciocinio e direcao profissional para times backend."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="glass-card space-y-5">
            {aboutPoints.map((point) => (
              <p key={point} className="text-base leading-8 text-slate-600 dark:text-slate-300">
                {point}
              </p>
            ))}
          </div>
          <div className="grid gap-5">
            {highlights.map(({ icon: Icon, title, description }) => (
              <article key={title} className="glass-card">
                <div className="icon-badge">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="section-shell">
        <SectionHeading
          eyebrow="Stack tecnologica"
          title="Competencias organizadas por area, com foco em backend e crescimento profissional consistente."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {skillCategories.map((category) => (
            <article key={category.category} className="glass-card">
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{category.category}</h3>
              <div className="mt-6 grid gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="flex items-center justify-between gap-4">
                      <h4 className="text-lg font-semibold text-slate-950 dark:text-white">{item.name}</h4>
                      <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">
                        {item.level}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projetos" className="section-shell">
        <SectionHeading
          eyebrow="Projetos"
          title="Projetos apresentados como experiencia de engenharia, nao apenas como lista de repositorios."
          description="Cada item possui narrativa de problema, arquitetura e aprendizado. Os estudos de caso detalhados ficam em paginas individuais."
        />
        <div className="mt-12 grid gap-6">
          {projects.map((project) => (
            <article key={project.slug} className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_18px_60px_rgba(148,163,184,0.15)] dark:border-white/10 dark:bg-white/[0.03] lg:grid-cols-[0.72fr_1.28fr]">
              <ProjectVisual label={project.imageLabel} />
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{project.status}</span>
                  <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:border-white/10 dark:text-slate-400">
                    {project.shortTitle}
                  </span>
                </div>
                <h3 className="mt-4 text-3xl font-semibold text-slate-950 dark:text-white">{project.title}</h3>
                <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">{project.description}</p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Problema resolvido</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.problemSolved}</p>
                  </div>
                  <div className="rounded-[1.4rem] border border-slate-200/80 bg-slate-50/80 p-5 dark:border-white/10 dark:bg-white/[0.02]">
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Arquitetura utilizada</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{project.architectureUsed}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Desafios enfrentados</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.challenges.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-950 dark:text-white">Aprendizados</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                      {project.learnings.map((item) => (
                        <li key={item}>- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                    <FiGithub />
                    GitHub
                  </a>
                  {project.demoUrl ? (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-secondary">
                      <FiArrowRight />
                      Demo
                    </a>
                  ) : null}
                  <Link to={`/projetos/${project.slug}`} className="btn-primary">
                    Ver estudo de caso
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="github" className="section-shell">
        <SectionHeading
          eyebrow="GitHub dashboard"
          title="Leitura rapida do meu perfil tecnico e do tipo de repositorio que venho construindo."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-5">
            {githubInsights.map((item) => (
              <article key={item.label} className="glass-card">
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.label}</p>
                <p className="mt-2 text-2xl font-semibold text-slate-950 dark:text-white">{item.value}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.detail}</p>
              </article>
            ))}
          </div>
          <div className="glass-card">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-cyan-300">
              Repositorios destacados
            </p>
            <div className="mt-6 space-y-4">
              {featuredRepositories.map((repo) => (
                <a
                  key={repo.name}
                  href={repo.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir repositorio ${repo.name} no GitHub`}
                  className="block rounded-[1.4rem] border border-slate-200/80 bg-white/70 p-5 transition hover:border-brand-500/30 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="font-semibold text-slate-950 dark:text-white">{repo.name}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{repo.note}</p>
                    </div>
                    <FiArrowRight className="shrink-0 text-brand-600 dark:text-cyan-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="jornada" className="section-shell">
        <SectionHeading
          eyebrow="Jornada e experiencia"
          title="Linha do tempo com marcos de aprendizado, desafios academicos e direcao tecnica."
        />
        <div className="mt-12 space-y-5">
          {timeline.map((item) => (
            <article key={item.title} className="glass-card relative overflow-hidden pl-8">
              <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-600 to-cyan-300" />
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-cyan-300">{item.period}</p>
              <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="certificacoes" className="section-shell">
        <SectionHeading
          eyebrow="Certificacoes e cursos"
          title="Estrutura preparada para ampliar evidencias formais de aprendizado."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {certifications.map((group) => (
            <article key={group.provider} className="glass-card">
              <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{group.provider}</h3>
              <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {group.items.map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="contato" className="section-shell">
        <SectionHeading
          eyebrow="Contato"
          title="Canal direto para recrutadores, networking tecnico e oportunidades de estagio."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid gap-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="glass-card flex items-center gap-4"
              >
                <div className="icon-badge">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-1 font-medium text-slate-950 dark:text-white">{value}</p>
                </div>
              </a>
            ))}
            <a href="/curriculo-joao-victor.pdf" download className="btn-primary w-fit">
              <FiDownload />
              Baixar curriculo
            </a>
          </div>

          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const subject = String(form.get("subject") || "");
    const message = String(form.get("message") || "");

    window.location.href = buildMailtoLink({ email, message, name, subject });
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="field-shell">
          <span>Nome</span>
          <input name="name" required placeholder="Seu nome" aria-label="Seu nome" />
        </label>
        <label className="field-shell">
          <span>Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="seuemail@dominio.com"
            aria-label="Seu email"
          />
        </label>
      </div>
      <label className="field-shell mt-5">
        <span>Assunto</span>
        <input
          name="subject"
          required
          placeholder="Assunto da mensagem"
          aria-label="Assunto da mensagem"
        />
      </label>
      <label className="field-shell mt-5">
        <span>Mensagem</span>
        <textarea
          name="message"
          rows={7}
          required
          placeholder="Descreva sua oportunidade ou contexto."
          aria-label="Mensagem"
        />
      </label>
      <button type="submit" className="btn-primary mt-8">
        <FiArrowRight />
        Enviar por email
      </button>
    </form>
  );
}
