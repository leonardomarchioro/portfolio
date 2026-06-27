import { AboutSection } from "@/components/AboutSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TechSection } from "@/components/TechSection";
import { getTranslation } from "@/i18n";
import type { Metadata } from "next";

interface PageProps {
  searchParams: { lng?: string };
}

export async function generateMetadata({
  searchParams,
}: PageProps): Promise<Metadata> {
  const { t } = getTranslation(searchParams.lng);
  return {
    title: t.metadata.title,
    description: t.metadata.description,
  };
}

export default function Home({ searchParams }: PageProps) {
  const lng = searchParams.lng || "pt_BR";
  const { t, g } = getTranslation(lng);
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_FORM_ID ?? "";

  return (
    <>
      <Header brand={g.brand} navItems={t.nav} currentLng={lng} />
      <main className="pb-[120px] pt-32 max-[520px]:pb-20 max-[520px]:pt-[104px]">
        <HeroSection content={t.hero} />
        <AboutSection content={t.sections.about} />
        <TechSection content={t.sections.tech} items={g.techStack} />
        <CertificationsSection content={t.sections.certifications} items={g.certifications} />
        <ContactForm content={t.sections.contact} formId={formId} />
      </main>
      <Footer content={t.footer} links={g.contactLinks} />
    </>
  );
}
