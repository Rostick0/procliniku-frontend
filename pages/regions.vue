<template>
  <div class="px-8">
    <Search class="mb-6" v-model="searchQuery" />
    <div class="font-medium text-ui-2 mb-3">Регионы</div>
    <div class="flex flex-col gap-y-3" v-if="regions?.length">
      <NuxtLink
        class="underline decoration-dotted"
        v-for="region in regions"
        :key="region?.id"
        :to="ROUTES_NAMES.cities"
      >
        {{ region?.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type IRegion from "~/interfaces/models/Region";
import debounce from "lodash/debounce";

const searchQuery = ref();
const { filters } = useFilter<{
  "filterLIKE[name]": string;
}>({
  initialFilters: {
    "filterLIKE[name]": "",
  },
});

watch(
  () => searchQuery.value,
  debounce((cur) => (filters.value["filterLIKE[name]"] = cur), 500)
);

const { data: regions, get } = await useApi<IRegion[]>({
  apiMethod: "getAll",
  apiName: "regions",
  filters,
});
await get();
</script>
