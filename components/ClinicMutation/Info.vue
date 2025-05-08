<template>
  <!-- {{ clinic }} -->
  <VFormComponent :field="icon_id" />
  <VFormComponent :field="description" />
  <VFormComponent :field="link" />
  <VFormComponent :field="link_vk" />
  <VFormComponent :field="link_videohost" />
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const icon_id = ref({
  type: "photo-loader",
  name: "icon_id",
  modelValue: props.clinic?.icon?.path ?? "",

  bind: {
    label: "Иконка клиники",
  },
});

const description = ref({
  type: "textarea",
  name: "description",
  rules: "required|max:255",
  modelValue: props.clinic?.description ?? "",

  bind: {
    label: "Описание",
  },
});

const link = ref({
  type: "text",
  name: "link",
  rules: "required|max:255",
  modelValue: props.clinic?.link ?? "",

  bind: {
    label: "Ссылка",
    type: "url",
  },
});

const link_vk = ref({
  type: "text",
  name: "link_vk",
  rules: "max:255",
  modelValue: props.clinic?.link_vk ?? "",

  bind: {
    label: "Вконтакте",
    type: "url",
  },
});

const link_videohost = ref({
  type: "text",
  name: "link_videohost",
  rules: "max:255",
  modelValue: props.clinic?.link_videohost ?? "",

  bind: {
    label: "YouTube/RuTube",
    type: "url",
  },
});
</script>
