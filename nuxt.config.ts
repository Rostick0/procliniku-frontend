// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  pages: true,

  devServer: {
    port: 3034,
  },

  css: ["~/assets/scss/index.scss"],

  modules: ["@nuxtjs/tailwindcss"],
});
