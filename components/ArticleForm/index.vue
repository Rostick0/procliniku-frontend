<template>
  <form class="" @submit="onSubmut">
    <div class="flex flex-col gap-y-2">
      <VFormComponent :field="title" />
      <VFormComponent :field="content" />
    </div>
    <div class="mt-6 ml-auto w-fit">
      <UiButton class="">Сохранить</UiButton>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useForm } from "vee-validate";
import api from "~/api";
import type IArticle from "~/interfaces/models/Article";

interface IProps {
  article?: IArticle;
}
const props = defineProps<IProps>();

const route = useRoute();
const router = useRouter();

const title = ref({
  type: "text",
  name: "title",
  rules: "required|max:255",
  modelValue: props.article?.title ?? "",

  bind: {
    label: "Заголовок",
  },
});

const content = ref({
  type: "ckeditor",
  name: "content",
  rules: "required|max:65536",
  modelValue: props.article?.content ?? "",

  bind: {
    label: "Текст статьи",
  },
});

const { handleSubmit, setErrors } = useForm();

const onSubmut = handleSubmit(async (values) => {
  const data = { ...values, clinic_id: route.params.id };

  const res = await api.articles.create({
    data,
  });

  if (res?.error) {
    warningPopup("Произошла ошибка!");
    setErrors(res?.errorResponse);
    return;
  }

  success("Статья успешно добавлена");
  router.back();
});
</script>
