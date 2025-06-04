import { getRequestConfig, setRequestLocale } from "next-intl/server";

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  setRequestLocale(locale);

  return {
    locale,
    messages: (await import(`./locales/${locale}.json`)).default,
    timeZone: "America/Colombia",
  };
});