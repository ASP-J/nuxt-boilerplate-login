// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_API_BASE_URL || "http://localhost:81",
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
    "nuxt-lodash",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
  ],
  lodash: {
    prefix: "_",
    prefixSkip: ["string"],
    upperAfterPrefix: false,
  },
  css: ["~/assets/css/main.css"],
  colorMode: {
    preference: "lightTheme",
    dataValue: "theme",
    classSuffix: "",
  },
  googleFonts: {
    families: {
      Poppins: [100, 300, 400, 500, 600, 700, 800, 900],
    },
    display: "swap",
  },
});
