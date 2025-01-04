<template>
  <div class="px-8">
    <Search class="mb-6" placeholder="Поиск города" v-model="searchQuery" />
    <div class="font-medium text-ui-2 mb-3">Города</div>
    <div class="flex flex-col gap-y-3 mb-8" v-if="regions?.length">
      <NuxtLink
        class="underline decoration-dotted"
        v-for="region in regions"
        :key="region?.id"
        :to="setCityUrl(region?.id)"
      >
        {{ region?.name }}
      </NuxtLink>
    </div>
    <UiPagination v-model="filters.page" :meta="meta" />
  </div>
</template>

<script lang="ts" setup>
import type IRegion from "~/interfaces/models/Region";
import debounce from "lodash/debounce";

const { filters } = useFilter<{
  "filterEQ[region_id]": string;
  "filterLIKE[name]": string;
  page: number;
}>({
  initialFilters: {
    "filterLIKE[name]": "",
    page: 1,
  },
  withInitQueryParams: true,
});

const searchQuery = ref();
watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value["filterLIKE[name]"] = cur), 500)
);

const setCityUrl = (cityId: number) => `${ROUTES_NAMES.cities}/${cityId}`;

const {
  data: regions,
  get,
  meta,
} = await useApi<IRegion[]>({
  apiMethod: "getAll",
  apiName: "cities",
  filters,
});
await get();

const title = "Города доступные в Проклинике";
const description = "Поможем вам найти подходящую - клинику именно для вас";
useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description,
});
</script>
