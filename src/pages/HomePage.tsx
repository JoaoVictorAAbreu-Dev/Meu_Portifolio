import { motion, useReducedMotion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  FiArrowRight,
  FiCheckCircle,
  FiClock,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMessageSquare,
  FiSend,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import { ExternalLink } from "../components/ExternalLink";
import { ProfilePhoto } from "../components/ProfilePhoto";
import { SectionHeading } from "../components/SectionHeading";
import {
  aboutPoints,
  contactLinks,
  highlights,
  projects,
  quickProfile,
  skillCategories,
  timeline,
} from "../data/portfolio";
import { MainLayout } from "../layouts/MainLayout";
import {
  buildContactMailtoLink,
  isContactFormConfigured,
  submitContactForm,
} from "../services/contact";
import { usePageMeta } from "../utils/meta";

type ContactStatus = "idle" | "sending" | "sent" | "error";
type ContactField = "name" | "email" | "company" | "subject" | "message";
type ContactErrors = Partial<Record<ContactField, string>>;

const subjectOptions = [
  "Oportunidade de estágio",
  "Convite para entrevista",
  "Networking profissional",
  "Projeto freelance",
  "Outro assunto",
];

export function HomePage() {
  const shouldReduceMotion = useReducedMotion();
  const resumeUrl = `${import.meta.env.BASE_URL}curriculo-joao-victor.pdf`;

  usePageMeta({
    title: "João Victor A. Abreu | Backend Engineer Portfolio",
    description:
      "Portfólio profissional com foco em backend, FastAPI, machine learning aplicado, APIs REST e arquitetura de software.",
  });

  const reveal = (delay = 0) =>
    shouldReduceMotion
      ? { initial: false }
      : {
          initial: { opacity: 0, y: 18 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.45, delay },
        };

  return (
    <MainLayout>
      <section
        aria-labelledby="hero-title"
        className="relative mx-auto grid max-w-7xl gap-12 overflow-hidden px-5 pb-18 pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:px-8 lg:pb-24 lg:pt-18"
      >
        <div className="hero-orb right-[8%] top-[6%] h-36 w-36 bg-brand-500/14" />
        <div className="hero-orb left-[4%] top-[34%] h-24 w-24 bg-cyan-300/14" />

        <div className="flex flex-col justify-center">
          <motion.p {...reveal()} className="eyebrow">
            Backend portfolio
          </motion.p>
          <motion.h1
            {...reveal(0.04)}
            id="hero-title"
            className="mt-5 max-w-4xl text-5xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-6xl"
          >
            João Victor Alves de Abreu
          </motion.h1>
          <motion.p
            {...reveal(0.08)}
            className="mt-5 text-lg font-semibold text-slate-800 dark:text-slate-100 sm:text-2xl"
          >
            Backend Engineer · Python · FastAPI · Java · ML
          </motion.p>
          <motion.p
            {...reveal(0.12)}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300"
          >
            Construo APIs, produtos orientados a dados e sistemas que
            transformam informação técnica em fluxo operacional, análise e
            decisão.
          </motion.p>

          <motion.div {...reveal(0.16)} className="mt-10 flex flex-wrap gap-4">
            <a href="#projetos" className="btn-primary">
              <FiArrowRight />
              Ver projetos
            </a>
            <a href={resumeUrl} download className="btn-secondary">
              <FiDownload />
              Baixar currículo
            </a>
          </motion.div>

          <motion.div
            {...reveal(0.2)}
            className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-600 dark:text-slate-300"
          >
            <span className="inline-flex items-center gap-2">
              <FiMapPin
                aria-hidden="true"
                className="text-brand-600 dark:text-cyan-300"
              />
              São Paulo, SP
            </span>
            <ExternalLink
              href="https://github.com/JoaoVictorAAbreu-Dev"
              className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white"
              aria-label="Abrir GitHub de João Victor em nova guia"
              showNewTabText
            >
              <FiGithub aria-hidden="true" />
              GitHub
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
              className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white"
              aria-label="Abrir LinkedIn de João Victor em nova guia"
              showNewTabText
            >
              <FiLinkedin aria-hidden="true" />
              LinkedIn
            </ExternalLink>
          </motion.div>
        </div>

        <motion.div
          {...reveal(0.08)}
          className="flex flex-col justify-center gap-6"
        >
          <ProfilePhoto />
          <div className="hero-panel">
            <p className="eyebrow">Base atual</p>
            <div className="mt-5 grid gap-4">
              {quickProfile.map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col gap-1 border-b border-slate-200/80 pb-4 last:border-0 last:pb-0 dark:border-white/10"
                >
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {item.label}
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="sobre"
        aria-labelledby="sobre-heading"
        className="section-shell scroll-mt-28 pt-10"
      >
        <SectionHeading
          id="sobre-heading"
          eyebrow="Sobre"
          title="Perfil técnico orientado a backend, dados e evolução consistente de engenharia."
          description="O objetivo deste portfólio é mostrar repertório real, clareza de raciocínio e potencial de crescimento com base em projetos públicos."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div {...reveal()} className="glass-card space-y-5">
            {aboutPoints.map((point) => (
              <p
                key={point}
                className="text-base leading-8 text-slate-600 dark:text-slate-300"
              >
                {point}
              </p>
            ))}
          </motion.div>
          <div className="grid gap-5">
            {highlights.map(({ icon: Icon, title, description }, index) => (
              <motion.article
                key={title}
                {...reveal(0.05 * index)}
                className="surface-card"
              >
                <div className="icon-badge">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950 dark:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
                  {description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="stack"
        aria-labelledby="stack-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="stack-heading"
          eyebrow="Stack"
          title="Tecnologias organizadas por área, com foco prático em backend, dados e produtos web."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.category}
              {...reveal(0.04 * index)}
              className="glass-card"
            >
              <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {category.category}
              </h3>
              <div className="mt-6 grid gap-4">
                {category.items.map((item) => (
                  <div key={item.name} className="surface-card">
                    <div className="flex items-start gap-4">
                      <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
                        <item.icon size={18} />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h4 className="text-lg font-semibold text-slate-950 dark:text-white">
                            {item.name}
                          </h4>
                          <span className="tag">{item.level}</span>
                        </div>
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="projetos"
        aria-labelledby="projetos-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="projetos-heading"
          eyebrow="Projetos"
          title="Quatro projetos públicos que representam meu foco técnico hoje."
          description="Cada projeto foi escolhido por demonstrar backend, integração, dados ou profundidade arquitetural de forma concreta."
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              {...reveal(0.05 * index)}
              whileHover={shouldReduceMotion ? undefined : { y: -6 }}
              aria-labelledby={`${project.slug}-title`}
              className="glass-card flex h-full flex-col"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="eyebrow">{project.status}</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {project.shortTitle}
                </span>
              </div>
              <h3
                id={`${project.slug}-title`}
                className="mt-4 text-2xl font-semibold text-slate-950 dark:text-white"
              >
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">
                    O que o sistema faz
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.problemSolved}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-950 dark:text-white">
                    Como foi estruturado
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    {project.architectureUsed}
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <ExternalLink
                  href={project.githubUrl}
                  className="btn-secondary"
                  aria-label={`Abrir repositório ${project.title} no GitHub em nova guia`}
                  showNewTabText
                >
                  <FiGithub />
                  Repositório
                </ExternalLink>
                <Link to={`/projetos/${project.slug}`} className="btn-primary">
                  Ver estudo de caso
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section
        id="jornada"
        aria-labelledby="jornada-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="jornada-heading"
          eyebrow="Jornada"
          title="Marcos que mostram a direção técnica da minha formação."
        />
        <ol className="mt-12 space-y-5">
          {timeline.map((item, index) => (
            <motion.li
              key={item.title}
              {...reveal(0.04 * index)}
              className="list-none"
            >
              <article className="glass-card relative overflow-hidden pl-8">
                <div className="absolute left-0 top-0 h-full w-1 rounded-full bg-gradient-to-b from-brand-600 to-cyan-300" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600 dark:text-cyan-300">
                  {item.period}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-base leading-8 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </article>
            </motion.li>
          ))}
        </ol>
      </section>

      <section
        id="contato"
        aria-labelledby="contato-heading"
        className="section-shell scroll-mt-28"
      >
        <SectionHeading
          id="contato-heading"
          eyebrow="Contato"
          title="Canais diretos para recrutadores, networking técnico e conversas sobre projetos."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
          <address className="grid gap-4 not-italic">
            {contactLinks.map(
              ({ icon: Icon, label, value, href, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                  className="glass-card flex items-center gap-4"
                  aria-label={
                    external
                      ? `${label}: ${value}. Abre em nova guia`
                      : `${label}: ${value}`
                  }
                >
                  <div className="icon-badge">
                    <Icon size={18} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 font-medium text-slate-950 dark:text-white">
                      {value}
                    </p>
                  </div>
                </a>
              ),
            )}
          </address>

          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<ContactStatus>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [subject, setSubject] = useState(subjectOptions[0]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ContactErrors>({});
  const configured = isContactFormConfigured();
  const remainingCharacters = 500 - message.length;

  const resetStatus = () => {
    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validateForm = () => {
    const nextErrors: ContactErrors = {};

    if (name.trim().length < 2) {
      nextErrors.name = "Informe um nome com pelo menos 2 caracteres.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = "Informe um email válido para retorno.";
    }

    if (company.trim().length > 80) {
      nextErrors.company =
        "O nome da empresa deve ter no máximo 80 caracteres.";
    }

    if (!subject.trim()) {
      nextErrors.subject = "Selecione um assunto principal.";
    }

    if (message.trim().length < 24) {
      nextErrors.message =
        "Descreva a oportunidade ou contexto com pelo menos 24 caracteres.";
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();
    const payload = {
      company: company.trim(),
      email: email.trim(),
      message: message.trim(),
      name: name.trim(),
      subject: subject.trim(),
    };

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    if (!configured) {
      window.location.href = buildContactMailtoLink(payload);
      setStatus("sent");
      return;
    }

    try {
      setStatus("sending");
      await submitContactForm(payload);
      setStatus("sent");
      setName("");
      setEmail("");
      setCompany("");
      setSubject(subjectOptions[0]);
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="glass-card">
      <div className="flex items-start gap-3">
        <div className="icon-badge h-11 w-11 shrink-0 rounded-xl">
          <FiMail size={18} aria-hidden="true" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
            Formulário de contato
          </h3>
          <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Preencha os dados do contato. Quando o endpoint estiver ativo, a
            mensagem é enviada direto pelo site. Sem endpoint, o formulário abre
            seu cliente de email com a mensagem pronta.
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-3 rounded-[1.5rem] border border-slate-200/80 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-white/[0.03] sm:grid-cols-3">
        <div className="rounded-[1.2rem] border border-slate-200/80 bg-white/70 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <FiSend className="text-brand-600 dark:text-cyan-300" />
            Envio
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            {configured ? "Direto pelo site" : "Abre email pronto"}
          </p>
        </div>
        <div className="rounded-[1.2rem] border border-slate-200/80 bg-white/70 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <FiClock className="text-brand-600 dark:text-cyan-300" />
            Retorno
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Preferencialmente em até 48h
          </p>
        </div>
        <div className="rounded-[1.2rem] border border-slate-200/80 bg-white/70 px-4 py-4 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
            <FiMessageSquare className="text-brand-600 dark:text-cyan-300" />
            Ideal para
          </p>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Estágio, networking e projetos
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate className="mt-8">
        <div className="grid gap-5 sm:grid-cols-2">
          <label htmlFor="contact-name" className="field-shell">
            <span>Nome</span>
            <input
              id="contact-name"
              name="name"
              required
              autoComplete="name"
              minLength={2}
              placeholder="Seu nome"
              value={name}
              onChange={(event) => {
                resetStatus();
                setName(event.target.value);
              }}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "contact-name-error" : undefined}
            />
            {errors.name ? (
              <small id="contact-name-error" className="field-error">
                {errors.name}
              </small>
            ) : null}
          </label>

          <label htmlFor="contact-email" className="field-shell">
            <span>Email</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="seuemail@dominio.com"
              value={email}
              onChange={(event) => {
                resetStatus();
                setEmail(event.target.value);
              }}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={
                errors.email ? "contact-email-error" : undefined
              }
            />
            {errors.email ? (
              <small id="contact-email-error" className="field-error">
                {errors.email}
              </small>
            ) : null}
          </label>
        </div>

        <div className="mt-5 grid gap-5 sm:grid-cols-[0.9fr_1.1fr]">
          <label htmlFor="contact-company" className="field-shell">
            <span>Empresa ou equipe</span>
            <input
              id="contact-company"
              name="company"
              autoComplete="organization"
              maxLength={80}
              placeholder="Opcional"
              value={company}
              onChange={(event) => {
                resetStatus();
                setCompany(event.target.value);
              }}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={
                errors.company
                  ? "contact-company-error"
                  : "contact-company-help"
              }
            />
            {errors.company ? (
              <small id="contact-company-error" className="field-error">
                {errors.company}
              </small>
            ) : (
              <small id="contact-company-help" className="field-help">
                Opcional, mas ajuda a contextualizar o contato.
              </small>
            )}
          </label>

          <label htmlFor="contact-subject" className="field-shell">
            <span>Assunto principal</span>
            <select
              id="contact-subject"
              name="subject"
              value={subject}
              onChange={(event) => {
                resetStatus();
                setSubject(event.target.value);
              }}
              aria-invalid={Boolean(errors.subject)}
              aria-describedby={
                errors.subject ? "contact-subject-error" : undefined
              }
            >
              {subjectOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.subject ? (
              <small id="contact-subject-error" className="field-error">
                {errors.subject}
              </small>
            ) : null}
          </label>
        </div>

        <label htmlFor="contact-message" className="field-shell mt-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="mb-0 block text-sm font-medium text-slate-600 dark:text-slate-300">
              Mensagem
            </span>
            <span
              className={`text-xs ${
                remainingCharacters < 80
                  ? "text-amber-600 dark:text-amber-300"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              {message.length}/500
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={7}
            required
            minLength={24}
            maxLength={500}
            placeholder="Descreva a oportunidade, contexto da vaga, stack desejada ou objetivo da conversa."
            value={message}
            onChange={(event) => {
              resetStatus();
              setMessage(event.target.value);
            }}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "contact-message-error" : "contact-message-help"
            }
          />
          {errors.message ? (
            <small id="contact-message-error" className="field-error">
              {errors.message}
            </small>
          ) : (
            <small id="contact-message-help" className="field-help">
              Quanto mais contexto, melhor a qualidade da resposta.
            </small>
          )}
        </label>

        <div className="mt-6 min-h-6" aria-live="polite">
          {status === "sent" ? (
            <p
              role="status"
              className="inline-flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-300"
            >
              <FiCheckCircle aria-hidden="true" />
              {configured
                ? "Mensagem enviada com sucesso."
                : "Rascunho aberto no seu cliente de email."}
            </p>
          ) : null}
          {status === "error" ? (
            <p
              role="alert"
              className="text-sm text-rose-600 dark:text-rose-300"
            >
              Revise os campos obrigatórios para continuar. Se preferir, use
              email ou LinkedIn.
            </p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap gap-4">
          <button
            type="submit"
            className="btn-primary w-full justify-center sm:w-auto"
            disabled={status === "sending"}
          >
            <FiArrowRight />
            {status === "sending"
              ? "Enviando..."
              : configured
                ? "Enviar mensagem"
                : "Abrir email pronto"}
          </button>

          <a
            href="mailto:joaovictoralvesabreu1@gmail.com"
            className="btn-secondary w-full justify-center sm:w-auto"
          >
            <FiMail />
            Email direto
          </a>

          <ExternalLink
            href="https://www.linkedin.com/in/jo%C3%A3ovictoraabreu"
            className="btn-secondary w-full justify-center sm:w-auto"
            aria-label="Abrir LinkedIn de João Victor em nova guia"
            showNewTabText
          >
            <FiLinkedin />
            LinkedIn
          </ExternalLink>
        </div>
      </form>
    </div>
  );
}
