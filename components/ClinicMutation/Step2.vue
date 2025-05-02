<template>
  <VFormComponent :field="address" />
  <VFormComponent :field="phone" />
  <VFormComponent :field="additional_phone" />
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const address = ref({
  type: "text",
  name: "address",
  rules: "required|max:255",
  modelValue: props.clinic?.address ?? "",

  bind: {
    label: "Адрес",
  },
});

const phone = ref({
  type: "text",
  name: "phone.0",
  rules: "required|max:255",
  modelValue: props.clinic?.clinic_phones?.[0]?.phone ?? "",

  bind: {
    label: "Телефон",
    type: "tel",
  },
});

const additional_phone = ref({
  type: "text",
  name: "phone.1",
  rules: "required|max:255",
  modelValue: props.clinic?.clinic_phones?.[1]?.phone ?? "",

  bind: {
    label: "Доп. телефон",
    type: "tel",
  },
});
</script>
