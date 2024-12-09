<template>
  <form class="auth-form" @submit="onSubmit" method="post">
    <div class="font-bold text-3xl text-center mb-8">Регистрация</div>
    <div class="auth-form__error error mb-3" v-if="errorMessage">
      {{ errorMessage }}
    </div>
    <div class="auth-form__fields mb-8">
      <template v-if="!isSendedCode">
        <div class="mb-4">
          <VFormComponent :field="email" />
        </div>
        <VFormComponent :field="password" />
      </template>
      <template v-else>
        <div class="mb-2">Введите код из почты {{ email.modelValue }}</div>
        <VFormComponent :field="code" />
      </template>
    </div>
    <UiButton
      v-if="!isSendedCode"
      class="auth-form__btn p-2 justify-center w-full"
      bgColor="blue"
      >Продолжить</UiButton
    >
    <div class="text-center text-xs mt-4">
      Уже есть аккаунт?
      <NuxtLink class="text-ui" :to="ROUTES_NAMES.login"
        >войти в аккаунт</NuxtLink
      >
    </div>
  </form>
</template>

<script lang="ts" setup>
// import formLite from "vue-form-lite";
// import { required, maxLength } from "@vue-form-lite/rules";
import { useForm } from "vee-validate";
import api from "~/api";
import type { EmailCodeType, IRegister } from "~/interfaces/models/User";
import debounce from "lodash/debounce";

const isSendedCode = ref<boolean>(false);
const { register } = await useAuth();

const { handleSubmit } = useForm();
const errorMessage = ref<string>();

const valuesForm = ref<IRegister>();

const onSubmit = handleSubmit(async (values: IRegister) => {
  const res = await api.emailCode.create({
    data: {
      email: values?.email,
      type: "register",
    },
  });

  if (res?.isError) {
    return warningPopup("Код не отправлен");
  }

  valuesForm.value = values;
  isSendedCode.value = true;
});

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
  rules: "required|min:8|max:255",
  modelValue: "",

  bind: {
    label: "Пароль",
    placeholder: "Введите пароль",
    type: "text",
  },
});

const code = ref({
  type: "text",
  name: "code",
  rules: "required|min:6|max:6",
  modelValue: "",

  bind: {
    label: "Код",
    placeholder: "Введите код",
    maska: "######",
  },
});

watch(
  () => code.value.modelValue,
  debounce(async (cur) => {
    if (cur?.length < 6) return;

    const res = await register({
      ...valuesForm.value,
      code: cur,
    });

    console.log(res);
  }, 300)
);

// const onSubmit = handleSubmit(async (values: ILogin) => {
//   const resErrors = await login(values);

//     errorMessage.value = resErrors;
//   // setErrors(convertValuesToString(resErrors?.errors));
// });

useHead({
  title: "Вход",
});

definePageMeta({
  layout: "auth",
  middleware: ["no-auth"],
});
</script>

<style lang="scss" scoped>
@use "./../assets/scss/components/auth-form.scss";
</style>
