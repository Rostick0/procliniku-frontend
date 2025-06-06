<template>
  <form @submit="onSubmut">
    <div class="flex flex-col gap-y-2 mb-6">
      <VFormComponent :field="password" />
      <VFormComponent v-if="step === 1" :field="code" />
    </div>
    <UiButton>{{ step === 1 ? "Обновить пароль" : "Изменить" }}</UiButton>
  </form>
</template>

<script lang="ts" setup>
import uniqueId from "lodash/uniqueId";
import { useForm } from "vee-validate";
import api from "~/api";
import type { EmailCodeType } from "~/interfaces/models/User";
import type IUser from "~/interfaces/models/User";

interface IProps {
  user: IUser;
}

const props = defineProps<IProps>();

const step = ref<0 | 1>(0);

const password = ref({
  type: "text",
  name: "password",
  rules: "required|max:255",
  modelValue: "",

  bind: {
    label: "Пароль",
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

const unicKeyTag = ref(useId());

const { handleSubmit, setErrors } = useForm();

const onSubmut = handleSubmit(async (values) => {
  if (step.value === 0) {
    const res = await api.emailCode.create({
      data: {
        email: props.user.email,
        type: "update_email" as EmailCodeType,
      },
    });

    if (res?.error) {
      warningPopup("Произошла ошибка!");
    } else {
      step.value++;
    }

    return;
  }

  const data = values;

  const res = await api.userProfile.updatePassword({
    data,
  });

  if (res?.error) {
    warningPopup("Произошла ошибка!");
    setErrors(res?.errorResponse);
    return;
  }

  code.value.modelValue = "";
  step.value = 0;
  success("Пароль обновлён");
});
</script>
