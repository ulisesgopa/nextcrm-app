import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["es", "en", "de", "cz", "uk"],
  defaultLocale: "es",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
