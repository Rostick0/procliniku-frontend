<template>
  <VFormComponent :field="images" />
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const images = ref({
  type: "multiple-photo-loader",
  name: "images",
  rules: "required",
  modelValue:
    props?.clinic?.images?.map?.((item) => ({ ...item?.image })) ?? "",

  bind: {
    label: "Фотографии",
  },
});
</script>
