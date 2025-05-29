<template>
  <div class="container" v-if="clinic">
    <ClinicItem class="mb-8" :clinic="clinic" />
    <ArticleList v-if="articles?.length" :articles="articles" />
    <UiPagination v-model="filters.page" :meta="metaArticles" />
  </div>
</template>

<script lang="ts" setup>
import type IArticle from "~/interfaces/models/Article";
import type IClinic from "~/interfaces/models/Clinic";

const route = useRoute();

const { data: clinic, get: getClinic } = await useApi<IClinic>({
  apiName: "clinics",
  apiMethod: "showByLinkName",
  requestParams: {
    link_name: route.params?.link_name,
  },
});

const { filters } = useFilter<initialFiltersItem>({
  initialFilters: {
    page: 1,
  },
});

const {
  data: articles,
  get: getArticles,
  meta: metaArticles,
} = await useApi<IArticle[]>({
  apiName: "articles",
  apiMethod: "getAll",
  filters,
  params: {
    "filterEQ[clinic.link_name]": route.params?.link_name,
  },
});

await Promise.all([getClinic(), getArticles()]);

if (!clinic.value)
  throw createError({
    statusCode: 404,
    message: "Страница не найден",
  });
</script>
