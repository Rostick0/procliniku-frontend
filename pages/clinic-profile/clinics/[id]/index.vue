<template>
  <div class="container">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack :to="ROUTES_NAMES.clinic_profile_clinics"
        >Настройки</ProfileBack
      >
      <div class="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 mb-4">
        <NuxtLink v-for="item in menu" :key="item.name" :to="item.link">
          <UiButton class="py-3">{{ item.name }}</UiButton>
        </NuxtLink>
      </div>
      <div class="flex gap-x-2 items-center justify-center">
        <IconMap width="18" height="18" />
        <span>Уфа</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type IUser from "~/interfaces/models/User";

const user = useState<IUser>("user");

const route = useRoute();
const id = +route.params.id;

const menu = [
  {
    name: "Общая информация",
    link: ROUTES_NAMES.clinic_profile_clinics_info(id),
  },
  {
    name: "Адреса",
    link: ROUTES_NAMES.clinic_profile_clinics_address(id),
  },
  {
    name: "Фотогалерея",
    link: ROUTES_NAMES.clinic_profile_clinics_images(id),
  },
  {
    name: "Теги",
    link: ROUTES_NAMES.clinic_profile_clinics_tags(id),
  },
  {
    name: "Статьи",
    link: ROUTES_NAMES.clinic_profile_clinics_articles(id),
  },
  {
    name: "Сотрудники",
    link: ROUTES_NAMES.clinic_profile_clinics_workers(id),
  },
];

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
