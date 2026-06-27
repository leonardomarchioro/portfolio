export const dictionary = {
  metadata: {
    title: "Leonardo Jose Marchioro Kefer - Full Stack Developer",
    description:
      "Portfolio of Leonardo Jose Marchioro Kefer, Full Stack developer specialized in back-end, integrations, and cloud.",
  },
  nav: [
    { label: "About", href: "#about" },
    { label: "Tech", href: "#tech" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact-form" },
  ],
  hero: {
    intro: "Hello, World. I am",
    name: "Leonardo Jose Marchioro Kefer",
    role: "Full Stack Developer",
    cta: "Get in touch",
  },
  sections: {
    about: {
      number: "01.",
      title: "About me",
      paragraphs: [
        "Full Stack Developer with almost 5 years of experience, specialized in back-end and complex integrations (Meta/WhatsApp API and HubSpot).",
        "Strategic performance in building scalable solutions, with strong experience in integration architecture, messaging, and cloud infrastructure on AWS.",
      ],
    },
    tech: {
      number: "02.",
      title: "Tech Stack",
      learning: "Learning",
    },
    certifications: {
      number: "03.",
      title: "Certifications"
    },
    contact: {
      number: "04.",
      title: "Get in touch",
      fields: {
        name: {
          label: "Name",
          placeholder: "Your name",
        },
        email: {
          label: "Email",
          placeholder: "your@email.com",
        },
        message: {
          label: "Message",
          placeholder: "How can I help?",
        },
      },
      submit: "Send message",
      submitting: "Sending...",
      success: "Message sent successfully.",
      error: "Could not send. Please try again.",
    },
  },
  footer: {
    title: "Let's talk",
    copyright: "© 2026 Developer Portfolio. Built with precision.",
  },
} as const;

export type Dictionary = typeof dictionary;
