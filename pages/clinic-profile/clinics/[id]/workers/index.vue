<template>
  <div class="p-2">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack
        :to="ROUTES_NAMES.clinic_profile_clinics_id(+$route.params.id)"
        >Статьи</ProfileBack
      >
      <NuxtLink
        class="block w-fit"
        :to="
          ROUTES_NAMES.clinic_profile_clinics_articles_add(+$route.params.id)
        "
      >
        <UiButton>Добавить</UiButton>
      </NuxtLink>
      <ProfileClinicWorkerList :clinicWorkers="clinicWorkers" />
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

const user = useState<IUser>("user");
const route = useRoute();

const clinicWorkers = await api.clinicWorker
  .getAll({
    params: {
      "filterEQ[clinic_id]": route.params.id,
      // extends: "city",
    },
  })
  ?.then((res) => res?.data);

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
