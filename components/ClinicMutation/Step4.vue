<template>
  <VFormComponent :field="clinic_categories" />
</template>

<script lang="ts" setup>
import api from "~/api";
import type IClinic from "~/interfaces/models/Clinic";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const clinic_categories = ref({
  type: "multiple-select",
  name: "clinic_categories",
  rules: "required",
  modelValue: props?.clinic?.clinic_categories ?? [],

  bind: {
    label: "Теги",
    debounceMs: 200,
    searchFn: async (
      _: any,
      searchString: string,
      limit: number,
      page: number
    ) =>
      await api.categories.getAll({
        params: {
          "filterLIKE[name]": searchString,
          // extends: "categories",
          limit,
          page,
        },
      }),
  },
});
</script>
