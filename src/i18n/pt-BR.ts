export const dictionary = {
  metadata: {
    title: "Leonardo Jose Marchioro Kefer - Desenvolvedor Full Stack",
    description:
      "Portfolio de Leonardo Jose Marchioro Kefer, desenvolvedor Full Stack especializado em back-end, integrações e cloud.",
  },
  nav: [
    { label: "Sobre", href: "#about" },
    { label: "Tech", href: "#tech" },
    { label: "Projetos", href: "#projects" },
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
        "Desenvolvedor Full Stack com quase 5 anos de experiência, especializado em back-end e integrações complexas (Meta/WhatsApp API e HubSpot).",
        "Atuação estratégica na construção de soluções escaláveis, com forte experiência em arquitetura de integrações, mensageria e infraestrutura cloud na AWS.",
      ],
    },
    tech: {
      number: "02.",
      title: "Tech Stack",
      learning: "Aprendendo",
    },
    projects: {
      number: "03.",
      title: "Projetos",
      items: {
        atlasBoard: {
          title: "Atlas Board",
          description:
            "Aplicação de quadro colaborativo para organizar tarefas, convites e fluxo de trabalho em times.",
        },
        employeeManagement: {
          title: "Sistema de Gestão de Funcionários",
          description:
            "Projeto acadêmico desenvolvido no primeiro semestre, reunindo prática de programação, documentação e entrega em equipe.",
        },
      },
    },
    certifications: {
      number: "04.",
      title: "Certificações",
    },
    contact: {
      number: "05.",
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
      error: "Nao foi possível enviar. Tente novamente.",
    },
  },
  footer: {
    title: "Vamos conversar",
    copyright: "© 2026 Developer Portfolio. Built with precision.",
  },
} as const;

export type Dictionary = typeof dictionary;
