// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

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
      link: [
        {
          rel: "manifest",
          href: "/manifest.json",
        },
        {
          rel: "icon",
          type: "image/png",
          href: "/favicons/favicon-96x96.png",
          sizes: "96x96",
        },
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/favicons/favicon.svg",
        },
        {
          rel: "shortcut icon",
          href: "/favicons/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "/favicons/apple-touch-icon.png",
          sizes: "180x180",
        },
      ],
    },
  },
  pages: true,

  devServer: {
    port: 3034,
  },

  css: ["~/assets/scss/index.scss"],

  modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt", "@nuxt/image"],

  runtimeConfig: {
    public: {
      BASE_URL: process.env.BASE_URL,
      API_URL: process.env.API_URL,
      BACK_URL: process.env.BACK_URL,
    },
  },

  pwa: {
    workbox: {
      navigateFallback: "/",
      importScripts: [],
      runtimeCaching: [
        {
          urlPattern: "/",
          handler: "NetworkFirst",
          method: "GET",
        },
      ],
    },

    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  ssr: false,
});
