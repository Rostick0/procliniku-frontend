<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack
        :to="ROUTES_NAMES.clinic_profile_clinics_id(+$route.params.id)"
        >Сотрудники</ProfileBack
      >
      <NuxtLink
        class="block w-fit mt-2"
        :to="ROUTES_NAMES.clinic_profile_clinics_workers_add(+$route.params.id)"
      >
        <UiButton>Добавить</UiButton>
      </NuxtLink>
      <ProfileClinicWorkerList
        v-if="clinicWorkers?.length"
        :clinicWorkers="clinicWorkers"
      />
      <UiPagination v-model="filters.page" :meta="meta" />

      <div class="flex gap-x-2 items-center justify-center">
        <IconMap width="18" height="18" />
        <span>Уфа</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type IClinicWorker from "~/interfaces/models/ClinicWorker";

const route = useRoute();

const { filters } = useFilter<{
  page: number;
}>({
  initialFilters: {
    page: 1,
  },
});

const { data: clinicWorkers, meta } = await useApi<IClinicWorker[]>({
  apiName: "clinicWorker",
  apiMethod: "getAll",
  filters,
  params: {
    "filterEQ[clinic_id]": route.params.id,
    extends: "user",
  },
  init: true,
});

definePageMeta({
  middleware: ["auth"],
});
</script>

<style lang="scss" scoped>
.profile {
  border-radius: 10px;

  &__top {
    border-bottom: 1px solid var(--ui-color);
  }
}
</style>
