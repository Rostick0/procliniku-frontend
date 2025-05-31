<template>
  <form class="" @submit="onSubmut">
    <div class="flex flex-col gap-y-2 mb-4">
      <VFormComponent :field="text" />
      <VFormComponent :field="rating" />
    </div>
    <UiButton>{{ review ? "Обновить" : "Добавить" }}</UiButton>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import api from "~/api";
import type IClinic from "~/interfaces/models/Clinic";
import type IReview from "~/interfaces/models/Review";

interface IProps {
  clinic: IClinic;
  review?: IReview;
}

const props = defineProps<IProps>();
const emits = defineEmits(["sended"]);

const text = ref({
  type: "text",
  name: "text",
  rules: "required|max:255",
  modelValue: props.review?.text ?? "",

  bind: {
    label: "Введите текст отзыва",
  },
});

const rating = ref({
  type: "stars",
  name: "rating",
  rules: "required",
  modelValue: props.review?.rating ?? 0,

  bind: {
    label: "Поставьте оценку",
  },
});

const { handleSubmit, setErrors } = useForm();

const onSubmut = handleSubmit(async (values) => {
  const data = { ...values, clinic_id: props.clinic.id };
  const res = await api.reviews.createOrUpdate({
    data,
  });

  if (res?.error) {
    warningPopup("Произошла ошибка!");
    setErrors(res?.errorResponse);
    return;
  }

  emits("sended", res?.data);
});
</script>
