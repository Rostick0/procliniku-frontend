<template>
  <VFormComponent :field="description" />
  <VFormComponent :field="link" />
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const description = ref({
  type: "text",
  name: "description",
  rules: "required|max:255",
  modelValue: props.clinic?.description ?? "",

  bind: {
    label: "Ссылка",
    type: "url",
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
</script>
