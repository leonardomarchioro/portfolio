import { generals } from "./generals";
import { dictionary as ptBR } from "./pt-BR";
import { dictionary as en } from "./en";

export type Dictionary = typeof ptBR;

export const getTranslation = (lng?: string) => {
  const lang = (lng || "").toLowerCase().replace("_", "-");
  if (lang.startsWith("en")) {
    return {
      locale: "en",
      t: en as unknown as Dictionary,
      g: generals,
    };
  }

  return {
    locale: "pt-BR",
    t: ptBR,
    g: generals,
  };
};

export const locale = "pt-BR";
export const t = ptBR;
export const g = generals;
