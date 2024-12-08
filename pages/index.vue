<template>
  <div class="px-8">
    <Search />
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

const { data, get } = await useApi<IClinic[]>({
  apiName: "clinics",
  apiMethod: "getAll",
  params: {
    extends: "clinic_phones",
  },
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
