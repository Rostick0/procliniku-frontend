// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: "ru-RU",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
      ],
    },
  },
  pages: true,

  devServer: {
    port: 3034,
  },

  css: ["~/assets/scss/index.scss"],

  modules: ["@nuxtjs/tailwindcss"],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_URL: process.env.API_URL,
      BACK_URL: process.env.BACK_URL,
    },
  },
});
