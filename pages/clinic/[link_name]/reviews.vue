<template>
  <div class="px-8" v-if="clinic">
    <ClinicItem class="mb-8" :clinic="clinic" />
    <ReviewList v-if="reviews?.length" :reviews="reviews" />
    <UiPagination v-model="filters.page" :meta="metaReviews" />
  </div>
</template>

<script lang="ts" setup>
import type IClinic from "~/interfaces/models/Clinic";
import type IReview from "~/interfaces/models/Review";

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
  data: reviews,
  get: getReviews,
  meta: metaReviews,
} = await useApi<IReview[]>({
  apiName: "reviews",
  apiMethod: "getAll",
  filters,
  params: {
    "filterEQ[clinic.link_name]": route.params?.link_name,
    extends: "user",
  },
});

await Promise.all([getClinic(), getReviews()]);

if (!clinic.value)
  throw createError({
    statusCode: 404,
    message: "Страница не найден",
  });
</script>
