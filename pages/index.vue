<template>
  <div class="px-8">
    <Search v-model="searchQuery" />
    <div class="text-xs mt-6 mb-8">
      ПроКлинику - Ваш надежный помощник в мире медицинских услуг, лечения и
      диагностики.
    </div>
    <ClinicList :clinics="data" />
    <!-- <UiButton>312</UiButton> -->
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
import debounce from "lodash/debounce";

const searchQuery = ref();
const { filters } = useFilter<{
  filterQ: string;
}>({
  initialFilters: {
    filterQ: "",
  },
});

watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value.filterQ = cur), 500)
);

const { data, get } = await useApi<IClinic[]>({
  apiName: "clinics",
  apiMethod: "getAll",
  params: {
    extends: "clinic_phones",
  },
  filters,
});
await get();

console.log(data.value);

// const clinics = [
//   {
//     id: 1,
//     name: "ABOBA",
//     address: "800 летие москвы вфы",
//     rating: 4,
//     longitude: 55.55,
//     latitude: 37.3736,
//     owner_id: 1,
//   },
// ] as IClinic[];
</script>

<style lang="scss" scoped></style>
