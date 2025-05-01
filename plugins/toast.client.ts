/*
  Плагин toast
  Пример использования: const { $toast } = useNuxtApp();
*/

import Toast, { useToast } from "vue-toastification";
export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(Toast);
  await import("vue-toastification/dist/index.css");

  return {
    provide: {
      toast: useToast(),
    },
  };
});
