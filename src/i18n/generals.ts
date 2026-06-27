export const generals = {
  brand: {
    prefix: "<",
    name: "DEV.SOLO",
    suffix: "/>",
  },
  techStack: [
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "React Native",
    "NestJS",
    "Python",
    "AWS (Lambda, SQS)",
    "Docker",
    "PostgreSQL",
    "BullMQ",
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
