<template>
  <form @submit="onSubmut">
    <div class="flex flex-col gap-y-2 mb-6">
      <VFormComponent :field="name" />
      <VFormComponent :field="phone" />
      <VFormComponent :field="birthdate" />
    </div>
    <UiButton>Изменить</UiButton>
  </form>
</template>

<script lang="ts" setup>
import moment from "moment";
import { useForm } from "vee-validate";
import api from "~/api";
import type IUser from "~/interfaces/models/User";

interface IProps {
  user: IUser;
}

const props = defineProps<IProps>();
// import type IUser from "~/interfaces/models/User";

// const user = useState<IUser>("user");

const name = ref({
  type: "text",
  name: "name",
  rules: "required|max:255",
  modelValue: props.user?.name ?? "",

  bind: {
    label: "Имя",
  },
});

const phone = ref({
  type: "text",
  name: "phone",
  rules: "required|max:30",
  modelValue: props.user?.phone ?? "",

  bind: {
    label: "Телефон",
    maska: maskaPhone,
    type: "tel",
  },
});

const birthdate = ref({
  type: "date",
  name: "birthdate",
  modelValue: props.user?.birthdate ?? "",

  bind: {
    label: "Дата рождения",
    enableTimePicker: false,
    autoApply: true,
    format: "dd.MM.yy",
    maxDate: new Date(),
  },
});

const { handleSubmit, setErrors } = useForm();

const onSubmut = handleSubmit(async ({ phone, birthdate, ...values }) => {
  const data = {
    ...values,
    phone: convertPhoneToDb(phone),
    birthdate: moment(birthdate).format(dateFormat),
  };

  console.log(data);

  const res = await api.userProfile.update({
    data,
  });

  if (res?.error) {
    warningPopup("Произошла ошибка!");
    setErrors(res?.errorResponse);
    return;
  }

  success("Профиль обновлён");
});
</script>
