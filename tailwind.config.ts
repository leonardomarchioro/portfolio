import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/i18n/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--theme-background)",
        "background-subtle": "var(--theme-background-subtle)",
        surface: "var(--theme-surface)",
        "surface-raised": "var(--theme-surface-raised)",
        "surface-strong": "var(--theme-surface-strong)",
        "surface-muted": "var(--theme-surface-muted)",
        text: "var(--theme-text)",
        "text-muted": "var(--theme-text-muted)",
        border: "var(--theme-border)",
        primary: "var(--theme-primary)",
        "primary-hover": "var(--theme-primary-hover)",
        "primary-contrast": "var(--theme-primary-contrast)",
        success: "var(--theme-success)",
        error: "var(--theme-error)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Geist", "system-ui", "sans-serif"],
        code: ["Geist Mono", "SFMono-Regular", "Consolas", "monospace"],
      },
      maxWidth: {
        container: "1100px",
      },
      spacing: {
        gutter: "24px",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};

export default config;
