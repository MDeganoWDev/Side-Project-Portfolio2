import type { NextPageContext } from "next";

type Locale = "en" | "es" | "fr";
type Dictionary = Record<string, any>;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: async () =>
    import("../../../locales/en.json").then((module) => module.default),
  fr: async () =>
    import("../../../locales/fr.json").then((module) => module.default),
  es: async () =>
    import("../../../locales/es.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
