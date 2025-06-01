<template>
  <div class="container">
    <div class="profile shadow-md p-3">
      <ProfileTop />
      <ProfileBack
        :to="ROUTES_NAMES.clinic_profile_clinics_id(+$route.params.id)"
        >Статьи</ProfileBack
      >
      <NuxtLink
        class="block w-fit mt-2"
        :to="
          ROUTES_NAMES.clinic_profile_clinics_articles_add(+$route.params.id)
        "
      >
        <UiButton>Добавить</UiButton>
      </NuxtLink>
      <ProfileArticleList
        v-if="articles?.length"
        :articles="articles"
        :getArticles="getArticles"
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
import api from "~/api";
import type IArticle from "~/interfaces/models/Article";
import type IUser from "~/interfaces/models/User";

const user = useState<IUser>("user");
const route = useRoute();

const { filters } = useFilter<{
  page: number;
}>({
  initialFilters: {
    page: 1,
  },
});

const {
  data: articles,
  get: getArticles,
  meta,
} = await useApi<IArticle[]>({
  apiName: "articles",
  apiMethod: "getAll",
  filters,
  params: {
    "filterEQ[clinic_id]": route.params.id,
  },
  init: true,
});

useSeoMeta({
  title: "Статьи клиники",
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
