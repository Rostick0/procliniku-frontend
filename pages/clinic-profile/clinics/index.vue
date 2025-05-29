<template>
  <div class="container">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack
        :to="ROUTES_NAMES.clinic_profile_clinics_id(+$route.params.id)"
        >Назад</ProfileBack
      >
      <ProfileClinicList v-if="clinics?.length" :clinics="clinics" />
      <UiPagination v-model="filters.page" :meta="meta" />
      <div class="flex gap-x-2 items-center justify-center">
        <IconMap width="18" height="18" />
        <span>Уфа</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import api from "~/api";
import type IUser from "~/interfaces/models/User";
import type IClinic from "~/interfaces/models/Clinic";

const user = useState<IUser>("user");

const { filters } = useFilter<initialFiltersItem>({
  initialFilters: {
    page: 1,
  },
});

const { data: clinics, meta } = await useApi<IClinic[]>({
  apiName: "clinics",
  apiMethod: "getAll",
  filters,
  params: {
    "filterEQ[owner_id]": user.value?.id,
    extends: "city",
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
