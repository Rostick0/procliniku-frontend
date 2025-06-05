<template>
  <form class="" @submit="onSubmut">
    <div class="flex flex-col gap-y-2">
      <VFormComponent :field="email" />
      <VFormComponent :field="name" />
      <VFormComponent :field="role" />
    </div>
    <div class="mt-6 ml-auto w-fit">
      <UiButton class="">Сохранить</UiButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import api from "~/api";
import type IClinicWorker from "~/interfaces/models/ClinicWorker";

interface IProps {
  clinicWorker?: IClinicWorker;
}
const props = defineProps<IProps>();

const route = useRoute();
const router = useRouter();

const email = ref({
  type: "text",
  name: "email",
  rules: "required|email|max:255",
  modelValue: props.clinicWorker?.user?.email ?? "",

  bind: {
    label: "E-mail",
  },
});

const name = ref({
  type: "text",
  name: "name",
  rules: "required|max:255",
  modelValue: props.clinicWorker?.user?.name ?? "",

  bind: {
    label: "ФИО",
  },
});

const role = ref({
  type: "select",
  name: "role",
  rules: "required",
  modelValue: props.clinicWorker?.role ?? "",

  bind: {
    label: "Роль",
    options: CLINIC_WORKER_ROLES_OPTIONS,
  },
});

const { handleSubmit, setErrors } = useForm();

const onSubmut = handleSubmit(async (values) => {
  const data = { ...values, role: values?.role.id, clinic_id: route.params.id };

  const res = await api.clinicWorker.create({
    data,
  });

  if (res?.error) {
    warningPopup("Произошла ошибка!");
    setErrors(res?.errorResponse);
    return;
  }

  success("Сотрудник успешно добавлена");
  navigateTo(ROUTES_NAMES.clinic_profile_clinics_workers(+route.params.id));
});
</script>
