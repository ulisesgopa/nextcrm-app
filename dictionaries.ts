import "server-only";

const dictionaries = {
  es: () => import("./locales/es.json").then((module) => module.default),
  en: () => import("./locales/en.json").then((module) => module.default),
  cz: () => import("./locales/cz.json").then((module) => module.default),
  de: () => import("./locales/de.json").then((module) => module.default),
  uk: () => import("./locales/uk.json").then((module) => module.default),
};

export const getDictionary = async (locale: "es" | "en" | "cz" | "de" | "uk" ) =>
  dictionaries[locale]();
