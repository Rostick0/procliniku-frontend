<template>
  <div class="container">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack
        :to="ROUTES_NAMES.clinic_profile_clinics_articles(+$route.params.id)"
        >Изменение статьи</ProfileBack
      >
      <div class="mt-6">
        <ArticleForm :article="article" />
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

const route = useRoute();

const article = await api.articles
  .get({
    id: route.params.article_id.toString(),
    params: {
      //   extends:
      // "clinic_phones,clinic_categories.category,clinic_services.service,images.image",
    },
  })
  ?.then((res) => res?.data);

useSeoMeta({
  title: "Редактирование статьи клиники",
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
