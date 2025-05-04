<template>
  <VFormComponent :field="coords" />
  <VFormComponent :field="address" />
  <VFormComponent :field="phone" />
  <VFormComponent :field="additional_phone" />
  <p>График работы:</p>
  <VFormComponent :field="work_times_0" />
  <VFormComponent :field="work_times_1" />
  <VFormComponent :field="work_times_2" />
  <VFormComponent :field="work_times_3" />
  <VFormComponent :field="work_times_4" />
  <VFormComponent :field="work_times_5" />
  <VFormComponent :field="work_times_6" />
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const coords = ref({
  type: "yandex-map",
  name: "coords",
  rules: "required",
  modelValue:
    props.clinic?.latitude && props.clinic?.longitude
      ? [props.clinic?.latitude, props.clinic?.longitude]
      : null,

  bind: {
    label: "Кординаты",
  },
});

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
  name: "clinic_phones.0",
  rules: "required|max:255",
  modelValue: props.clinic?.clinic_phones?.[0]?.phone ?? "",

  bind: {
    label: "Телефон",
    type: "tel",
  },
});

const additional_phone = ref({
  type: "text",
  name: "clinic_phones.1",
  rules: "max:255",
  modelValue: props.clinic?.clinic_phones?.[1]?.phone ?? "",

  bind: {
    label: "Доп. телефон",
    type: "tel",
  },
});

const workTimeDefault1 = props.clinic?.work_times?.find(
  (item) => item.day === 6
);

const getTimeWorkToDefault = (day: number) =>
  convertTimeWorkToDefault(day, props.clinic?.work_times);

const work_times_0 = ref({
  type: "date",
  name: "work_times.0",
  modelValue: getTimeWorkToDefault(0),

  bind: {
    label: "Пн",
    // type: "tel",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});

const work_times_1 = ref({
  type: "date",
  name: "work_times.1",
  modelValue: getTimeWorkToDefault(1),

  bind: {
    label: "Вт",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});

const work_times_2 = ref({
  type: "date",
  name: "work_times.2",
  modelValue: getTimeWorkToDefault(2),

  bind: {
    label: "Ср",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});

const work_times_3 = ref({
  type: "date",
  name: "work_times.3",
  modelValue: getTimeWorkToDefault(3),

  bind: {
    label: "Чт",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});

const work_times_4 = ref({
  type: "date",
  name: "work_times.4",
  modelValue: getTimeWorkToDefault(4),

  bind: {
    label: "Пт",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});

const work_times_5 = ref({
  type: "date",
  name: "work_times.5",
  modelValue: getTimeWorkToDefault(5),

  bind: {
    label: "Сб",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});

const work_times_6 = ref({
  type: "date",
  name: "work_times.6",
  modelValue: getTimeWorkToDefault(6),

  bind: {
    label: "Вс",
    range: true,
    timePicker: true,
    format: "HH:mm",
  },
});
</script>
