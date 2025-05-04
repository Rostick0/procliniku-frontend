<template>
  <div class="px-8">
    <Search v-model="searchQuery" />
    <div class="text-xs mt-6 mb-8">
      ПроКлинику - Ваш надежный помощник в мире медицинских услуг, лечения и
      диагностики.
    </div>
    <ClinicList :clinics="data" />
    <UiPagination v-model="filters.page" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
import debounce from "lodash/debounce";

const searchQuery = ref();
const { filters } = useFilter<{
  filterQ: string;
  page: number;
}>({
  initialFilters: {
    filterQ: "",
    page: 1,
  },
});

watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value.filterQ = cur), 500)
);

const { data, get, meta } = await useApi<IClinic[]>({
  apiName: "clinics",
  apiMethod: "getAll",
  params: {
    extends: "clinic_phones",
  },
  filters,
});
await get();

const title = "Проклинику | поиск лучшей клиники";
const description = "Поможем вам найти подходящую - клинику именно для вас";
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>

<style lang="scss" scoped></style>
