<template>
  <VFormComponent :field="clinic_categories" />
  <VFormComponent :field="clinic_services" />
</template>

<script lang="ts" setup>
import api from "~/api";
import type IClinic from "~/interfaces/models/Clinic";
import type IClinicCategory from "~/interfaces/models/ClinicCategory";
import type IClinicService from "~/interfaces/models/ClinicService";

interface IProps {
  clinic?: IClinic;
}

const props = defineProps<IProps>();

const clinic_categories = ref({
  type: "multiple-select",
  name: "clinic_categories",
  rules: "required",
  modelValue:
    props?.clinic?.clinic_categories?.map((item: IClinicCategory) => ({
      ...item.category,
    })) ?? [],

  bind: {
    label: "Теги",
    searchFn: async (
      _: any,
      searchString: string,
      limit: number,
      page: number
    ) =>
      await api.categories.getAll({
        params: {
          "filterLIKE[name]": searchString,
          limit,
          page,
        },
      }),
  },
});

const clinic_services = ref({
  type: "multiple-select",
  name: "clinic_services",
  rules: "required",
  modelValue:
    props?.clinic?.clinic_services?.map((item: IClinicService) => ({
      ...item.service,
    })) ?? [],

  bind: {
    label: "Услуги",
    searchFn: async (
      _: any,
      searchString: string,
      limit: number,
      page: number
    ) =>
      await api.services.getAll({
        params: {
          "filterLIKE[name]": searchString,
          limit,
          page,
        },
      }),
  },
});
</script>
