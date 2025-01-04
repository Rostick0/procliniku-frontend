<template>
  <form class="auth-form" @submit="onSubmit" method="post">
    <div class="font-bold text-3xl text-center mb-8">Авторизация</div>
    <div class="auth-form__error text-red-600 mb-3" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div class="auth-form__fields mb-8">
      <div class="mb-4">
        <VFormComponent :field="email" />
      </div>
      <VFormComponent :field="password" />
    </div>
    <UiButton class="auth-form__btn p-2 justify-center w-full" bgColor="blue"
      >Войти</UiButton
    >
    <div class="text-center text-xs mt-4">
      Еще не зарегестрированы?
      <NuxtLink class="text-ui" :to="ROUTES_NAMES.register"
        >Создать аккаунт</NuxtLink
      >
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import type { ILogin } from "~/interfaces/models/User";

const { handleSubmit } = useForm<ILogin>();
const { login } = await useAuth();

const errorMessage = ref<string>();

const email = ref({
  type: "text",
  name: "email",
  rules: "required|email|max:255",
  modelValue: "",

  bind: {
    label: "Почта",
    placeholder: "Введите вашу почту",
    type: "email",
  },
});

const password = ref({
  type: "text",
  name: "password",
  rules: "required|max:255",
  modelValue: "",

  bind: {
    label: "Пароль",
    placeholder: "Введите пароль",
    type: "password",
  },
});

const onSubmit = handleSubmit(async (values) => {
  const resErrors = await login(values);

  errorMessage.value = resErrors?.message;
});

useHead({
  title: "Вход в аккаунт",
});

definePageMeta({
  layout: "auth",
  middleware: ["no-auth"],
});
</script>

<style lang="scss" scoped>
@use "./../assets/scss/components/auth-form.scss";
</style>
