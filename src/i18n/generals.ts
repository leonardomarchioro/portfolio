export const generals = {
  brand: {
    prefix: "<",
    name: "DEV.SOLO",
    suffix: "/>",
  },
  techStack: [
    { name: "Node.js", learning: false },
    { name: "TypeScript", learning: false },
    { name: "React", learning: false },
    { name: "Next.js", learning: false },
    { name: "React Native", learning: false },
    { name: "NestJS", learning: false },
    { name: "Python", learning: false },
    { name: "AWS (Lambda, SQS)", learning: false },
    { name: "Docker", learning: false },
    { name: "PostgreSQL", learning: false },
    { name: "BullMQ", learning: false },
    { name: "Java", learning: true },
  ],
  projects: [
    {
      title: "Sistema de Integrações",
      description:
        "Arquitetura para conectar APIs externas, filas e serviços internos com foco em rastreabilidade e escalabilidade.",
      href: "https://github.com/leonardomarchioro",
      icon: "server",
    },
    {
      title: "Hub de Automação",
      description:
        "Fluxos automatizados para reduzir tarefas manuais, padronizar operações e acelerar rotinas de atendimento.",
      href: "https://github.com/leonardomarchioro",
      icon: "code",
    },
    {
      title: "Portfolio Next.js",
      description:
        "Portfolio pessoal com Next.js, TypeScript, Tailwind CSS, internacionalização e formulário de contato.",
      href: "https://github.com/leonardomarchioro",
      icon: "github",
    },
  ],
  certifications: [
    {
      title: "AWS Technical Essentials",
      issuer: "Amazon Web Services (AWS)",
      href: "https://drive.google.com/file/d/1l5vswcwfAEWiF0xrjjWC7ymRodHzqOhn/view",
    },
    {
      title: "Certificado de Formação em Desenvolvimento Full Stack",
      issuer: "Kenzie Academy",
      href: "https://drive.google.com/file/d/1UkRPvle26N538LoeQkLXOoRTzmuh6a3X/view",
    },
  ],
  contactLinks: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leonardo-marchioro/",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/leonardomarchioro",
      icon: "github",
    },
    {
      label: "Email",
      href: "mailto:leonardomarchioro+portfolio@gmail.com",
      icon: "mail",
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/5547996797620",
      icon: "whatsapp",
    },
  ],
} as const;

export type Generals = typeof generals;
