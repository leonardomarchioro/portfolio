export const dictionary = {
  metadata: {
    title: "Leonardo Jose Marchioro Kefer - Desenvolvedor Full Stack",
    description:
      "Portfolio de Leonardo Jose Marchioro Kefer, desenvolvedor Full Stack especializado em back-end, integracoes e cloud.",
  },
  nav: [
    { label: "Sobre", href: "#about" },
    { label: "Tech", href: "#tech" },
    { label: "Certificações", href: "#certifications" },
    { label: "Contato", href: "#contact-form" },
  ],
  hero: {
    intro: "Hello, World. Eu sou",
    name: "Leonardo Jose Marchioro Kefer",
    role: "Desenvolvedor Full Stack",
    cta: "Entrar em contato",
  },
  sections: {
    about: {
      number: "01.",
      title: "Sobre mim",
      paragraphs: [
        "Desenvolvedor Full Stack com quase 5 anos de experiencia, especializado em back-end e integracoes complexas (Meta/WhatsApp API e HubSpot).",
        "Atuacao estrategica na construcao de solucoes escalaveis, com forte experiencia em arquitetura de integracoes, mensageria e infraestrutura cloud na AWS.",
      ],
    },
    tech: {
      number: "02.",
      title: "Tech Stack",
    },
    certifications: {
      number: "03.",
      title: "Certificações"
    },
    contact: {
      number: "04.",
      title: "Entrar em contato",
      fields: {
        name: {
          label: "Nome",
          placeholder: "Seu nome",
        },
        email: {
          label: "Email",
          placeholder: "seu@email.com",
        },
        message: {
          label: "Mensagem",
          placeholder: "Como posso ajudar?",
        },
      },
      submit: "Enviar mensagem",
      submitting: "Enviando...",
      success: "Mensagem enviada com sucesso.",
      error: "Nao foi possivel enviar. Tente novamente.",
    },
  },
  footer: {
    title: "Vamos conversar",
    copyright: "© 2026 Developer Portfolio. Built with precision.",
  },
} as const;

export type Dictionary = typeof dictionary;
