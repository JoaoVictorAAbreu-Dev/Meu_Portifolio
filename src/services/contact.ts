type ContactPayload = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

export function buildMailtoLink({ email, message, name, subject }: ContactPayload) {
  const encodedSubject = encodeURIComponent(subject || `Contato via portfolio - ${name}`);
  const encodedMessage = encodeURIComponent(
    `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
  );

  return `mailto:jv9217096@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;
}
