import type { Metadata } from "next";
import "./globals.css";
import { locale, t } from "@/i18n";

export const metadata: Metadata = {
  title: t.metadata.title,
  description: t.metadata.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={locale} data-theme="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-background font-sans text-text antialiased selection:bg-primary-hover selection:text-[var(--theme-selection-text)]">
        {children}
      </body>
    </html>
  );
}
