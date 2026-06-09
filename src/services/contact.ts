export type ContactPayload = {
  company?: string;
  email: string;
  message: string;
  name: string;
  subject: string;
};

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export function isContactFormConfigured() {
  return Boolean(FORMSPREE_ENDPOINT);
}

export function buildContactMailtoLink(payload: ContactPayload) {
  const subject = `[Portfolio] ${payload.subject}`;
  const body = [
    `Nome: ${payload.name}`,
    `Email: ${payload.email}`,
    `Empresa: ${payload.company?.trim() || "Nao informado"}`,
    "",
    "Mensagem:",
    payload.message,
  ].join("\n");

  const query = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:joaovictoralvesabreu1@gmail.com?${query.toString()}`;
}

export async function submitContactForm(payload: ContactPayload) {
  if (!FORMSPREE_ENDPOINT) {
    throw new Error("Formspree endpoint not configured");
  }

  const response = await fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Unable to submit contact form");
  }
}
