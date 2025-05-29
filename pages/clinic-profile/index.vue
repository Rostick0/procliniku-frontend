<template>
  <div class="container">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <NuxtLink
        class="flex max-w-72 w-full mx-auto mb-4"
        :to="ROUTES_NAMES.clinic_profile_cnc"
      >
        <UiButton>Панель управления ЛПУ</UiButton>
      </NuxtLink>
      <div class="grid sm:grid-cols-2 gap-6 mb-4">
        <ProfileInfo
          title="Личные данные"
          :link="ROUTES_NAMES.profile_favorites"
        />
        <ProfileInfo
          title="Мои Юрлица"
          :link="ROUTES_NAMES.clinic_profile_legal_entity"
        />
        <ProfileInfo
          title="Мои клиники"
          :link="ROUTES_NAMES.clinic_profile_clinics"
        />
        <ProfileInfo
          title="Мои записи"
          :link="ROUTES_NAMES.profile_appointment_past"
        />
      </div>
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
