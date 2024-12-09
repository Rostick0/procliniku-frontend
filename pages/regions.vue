<template>
  <div class="px-8">
    <Search class="mb-6" v-model="searchQuery" />
    <div class="font-medium text-ui-2 mb-3">Регионы</div>
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
  "filterLIKE[name]": string;
  page: number;
}>({
  initialFilters: {
    "filterLIKE[name]": "",
    page: 1,
  },
});

const searchQuery = ref();
watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value["filterLIKE[name]"] = cur), 500)
);

const setCityUrl = (regionId: number) =>
  ROUTES_NAMES.cities + `?filterEQ[region_id]=${regionId}`;

watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value["filterLIKE[name]"] = cur), 500)
);

const {
  data: regions,
  get,
  meta,
} = await useApi<IRegion[]>({
  apiMethod: "getAll",
  apiName: "regions",
  filters,
});
await get();
</script>
